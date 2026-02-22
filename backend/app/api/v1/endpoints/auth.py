from fastapi import APIRouter, Depends, HTTPException, status, Body
from fastapi.security import OAuth2PasswordRequestForm
from typing import Any
from app.services.supabase_service import supabase_service
from app.schemas.user import User, UserCreate
from app.api import deps

router = APIRouter()

@router.post("/signup")
async def signup(
    *,
    user_in: UserCreate,
) -> Any:
    """
    Register a new user
    """
    try:
        # Sign up with Supabase
        response = await supabase_service.sign_up(
            email=user_in.email,
            password=user_in.password,
            user_data={
                "full_name": user_in.full_name,
                # Add any other user metadata
            }
        )
        
        # Return user data and session
        return {
            "user": response.user,
            "session": response.session
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )

@router.post("/login")
async def login(
    form_data: OAuth2PasswordRequestForm = Depends()
) -> Any:
    """
    OAuth2 compatible token login
    """
    try:
        response = await supabase_service.sign_in(
            email=form_data.username,
            password=form_data.password
        )
        
        return {
            "access_token": response.session.access_token,
            "refresh_token": response.session.refresh_token,
            "token_type": "bearer",
            "user": response.user
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
        )

@router.post("/refresh")
async def refresh_token(
    refresh_token: str = Body(..., embed=True)
) -> Any:
    """
    Refresh access token
    """
    try:
        response = await supabase_service.refresh_token(refresh_token)
        return {
            "access_token": response.session.access_token,
            "refresh_token": response.session.refresh_token,
            "token_type": "bearer"
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid refresh token",
        )

@router.post("/logout")
async def logout(
    current_user: dict = Depends(deps.get_current_user)
) -> Any:
    """
    Logout current user
    """
    await supabase_service.sign_out(current_user)
    return {"message": "Successfully logged out"}

@router.get("/me", response_model=dict)
async def read_users_me(
    current_user: dict = Depends(deps.get_current_user)
) -> Any:
    """
    Get current user
    """
    return current_user
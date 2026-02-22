from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from typing import Optional
from app.services.supabase_service import supabase_service

security = HTTPBearer()

async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security)
) -> dict:
    """
    Dependency to get current user from Supabase JWT token
    """
    token = credentials.credentials
    
    # Verify the token
    payload = supabase_service.verify_token(token)
    if not payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Get user from Supabase
    try:
        user = await supabase_service.get_user(token)
        return user.user
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found or token expired",
        )

async def get_current_active_user(
    current_user: dict = Depends(get_current_user),
) -> dict:
    """
    Check if user is active
    """
    # You can add additional checks here
    # For Supabase, users are typically active by default
    return current_user

async def get_current_superuser(
    current_user: dict = Depends(get_current_user),
) -> dict:
    """
    Check if user is superuser
    Note: You'll need to add a custom claim or role in Supabase
    """
    # Check for superuser role (you need to set this up in Supabase)
    user_metadata = current_user.get("user_metadata", {})
    if not user_metadata.get("is_superuser", False):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    return current_user
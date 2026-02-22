from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, status
from app.api import deps
from app.schemas.user import User, UserUpdate
from app.services.user_service import user_service

router = APIRouter()

@router.get("/me", response_model=dict)
async def read_user_me(
    current_user: dict = Depends(deps.get_current_user),
) -> Any:
    """
    Get current user
    """
    return current_user

@router.put("/me", response_model=dict)
async def update_user_me(
    *,
    user_in: UserUpdate,
    current_user: dict = Depends(deps.get_current_user),
) -> Any:
    """
    Update own user
    """
    user_id = current_user.get("id")
    updated_user = await user_service.update_user(user_id, user_in.model_dump(exclude_unset=True))
    return updated_user

@router.get("/{user_id}", response_model=dict)
async def read_user_by_id(
    user_id: str,
    current_user: dict = Depends(deps.get_current_active_user),
) -> Any:
    """
    Get a specific user by id
    """
    # Check permissions
    if user_id != current_user.get("id") and not current_user.get("user_metadata", {}).get("is_superuser"):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    user = await user_service.get_user_by_id(user_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    return user

# Admin only endpoints
@router.get("/", response_model=List[dict])
async def read_users(
    skip: int = 0,
    limit: int = 100,
    current_user: dict = Depends(deps.get_current_superuser),
) -> Any:
    """
    Retrieve users. Only for superusers.
    """
    users = await user_service.get_users(skip=skip, limit=limit)
    return users

@router.delete("/{user_id}")
async def delete_user(
    user_id: str,
    current_user: dict = Depends(deps.get_current_superuser),
) -> Any:
    """
    Delete a user. Only for superusers.
    """
    success = await user_service.delete_user(user_id)
    if not success:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    return {"message": "User deleted successfully"}
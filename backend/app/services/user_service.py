from app.services.supabase_service import supabase_service
from typing import Optional, Dict, Any, List

class UserService:
    async def get_user_by_id(self, user_id: str) -> Optional[Dict]:
        """Get user by ID from Supabase Auth"""
        # Note: This requires admin client
        # You might need to use Supabase Admin API
        result = await supabase_service.select(
            "users", 
            query={"id": user_id},
            use_admin=True
        )
        return result.data[0] if result.data else None
    
    async def get_user_by_email(self, email: str) -> Optional[Dict]:
        """Get user by email"""
        result = await supabase_service.select(
            "users",
            query={"email": email},
            use_admin=True
        )
        return result.data[0] if result.data else None
    
    async def get_users(self, skip: int = 0, limit: int = 100) -> List[Dict]:
        """Get all users (admin only)"""
        result = await supabase_service.select(
            "users",
            use_admin=True
        )
        # Apply pagination manually (Supabase supports this in query)
        return result.data[skip:skip+limit] if result.data else []
    
    async def update_user(self, user_id: str, user_data: Dict[str, Any]) -> Dict:
        """Update user metadata"""
        # Update user_metadata in Supabase Auth
        # This requires admin API access
        # For now, we'll update a custom users table
        result = await supabase_service.update(
            "users",
            query={"id": user_id},
            data=user_data,
            use_admin=True
        )
        return result.data[0] if result.data else {}
    
    async def delete_user(self, user_id: str) -> bool:
        """Delete user (admin only)"""
        result = await supabase_service.delete(
            "users",
            query={"id": user_id},
            use_admin=True
        )
        return bool(result.data)

user_service = UserService()
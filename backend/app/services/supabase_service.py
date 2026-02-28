from supabase import create_client, Client
from app.core.config import settings
from typing import Optional, Dict, Any, List
import jwt
from datetime import datetime

class SupabaseService:
    def __init__(self):
        """Initialize Supabase client"""
        self.client: Client = create_client(
            settings.SUPABASE_URL, 
            settings.SUPABASE_ANON_KEY
        )
        # Admin client with service role for privileged operations
        self.admin_client: Client = create_client(
            settings.SUPABASE_URL,
            settings.SUPABASE_SERVICE_KEY
        )
    
    # Authentication Methods
    async def sign_up(self, email: str, password: str, user_data: Dict[str, Any] = None):
        """Register a new user"""
        response = self.client.auth.sign_up({
            "email": email,
            "password": password,
            "options": {
                "data": user_data or {}
            }
        })
        return response
    
    async def sign_in(self, email: str, password: str):
        """Sign in user"""
        response = self.client.auth.sign_in_with_password({
            "email": email,
            "password": password
        })
        return response
    
    async def sign_out(self, jwt_token: str):
        """Sign out user"""
        self.client.auth.sign_out()
    
    async def get_user(self, jwt_token: str):
        """Get user by JWT token"""
        self.client.auth.session = jwt_token
        user = self.client.auth.get_user()
        return user
    
    async def refresh_token(self, refresh_token: str):
        """Refresh access token"""
        response = self.client.auth.refresh_session(refresh_token)
        return response
    
    # Database Operations
    async def select(self, table: str, query: Optional[Dict] = None, 
                    use_admin: bool = False):
        """Select records from a table"""
        client = self.admin_client if use_admin else self.client
        if query:
            # Build query dynamically
            result = client.table(table).select("*")
            for key, value in query.items():
                result = result.eq(key, value)
            return result.execute()
        return client.table(table).select("*").execute()
    
    async def insert(self, table: str, data: Dict[str, Any], 
                    use_admin: bool = False):
        """Insert a record"""
        client = self.admin_client if use_admin else self.client
        return client.table(table).insert(data).execute()
    
    async def update(self, table: str, query: Dict, data: Dict[str, Any],
                    use_admin: bool = False):
        """Update records"""
        client = self.admin_client if use_admin else self.client
        result = client.table(table).update(data)
        for key, value in query.items():
            result = result.eq(key, value)
        return result.execute()
    
    async def delete(self, table: str, query: Dict, use_admin: bool = False):
        """Delete records"""
        client = self.admin_client if use_admin else self.client
        result = client.table(table).delete()
        for key, value in query.items():
            result = result.eq(key, value)
        return result.execute()
    
    # Storage Operations
    async def upload_file(self, bucket: str, path: str, file_data: bytes):
        """Upload file to Supabase Storage"""
        return self.client.storage.from_(bucket).upload(path, file_data)
    
    async def get_file_url(self, bucket: str, path: str):
        """Get public URL for file"""
        return self.client.storage.from_(bucket).get_public_url(path)
    
    # Verify JWT token from Supabase
    def verify_token(self, token: str) -> Optional[Dict]:
        """Verify Supabase JWT token"""
        try:
            payload = jwt.decode(
                token,
                settings.SUPABASE_JWT_SECRET,
                algorithms=[settings.ALGORITHM],
                options={"verify_aud": False}  # Supabase doesn't use 'aud' claim
            )
            return payload
        except jwt.PyJWTError:
            return None

# Create singleton instance
supabase_service = SupabaseService()
from typing import Optional
from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    email: Optional[EmailStr] = None

class UserUpdate(UserBase):
    pass

class User(UserBase):
    pass

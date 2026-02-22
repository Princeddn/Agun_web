from app.services.supabase_service import supabase_service
from typing import Optional, Dict, Any, List
from app.schemas.item import ItemCreate, ItemUpdate

class ItemService:
    async def get_items(self, user_id: Optional[str] = None, 
                       skip: int = 0, limit: int = 100) -> List[Dict]:
        """Get items, optionally filtered by user"""
        query = {}
        if user_id:
            query["owner_id"] = user_id
        
        result = await supabase_service.select("items", query=query)
        
        # Apply pagination (Supabase supports range headers)
        # For simplicity, we'll slice here
        items = result.data if result.data else []
        return items[skip:skip+limit]
    
    async def get_item(self, item_id: int) -> Optional[Dict]:
        """Get single item by ID"""
        result = await supabase_service.select(
            "items", 
            query={"id": item_id}
        )
        return result.data[0] if result.data else None
    
    async def create_item(self, item: ItemCreate, owner_id: str) -> Dict:
        """Create a new item"""
        item_data = item.model_dump()
        item_data["owner_id"] = owner_id
        
        result = await supabase_service.insert("items", item_data)
        return result.data[0] if result.data else {}
    
    async def update_item(self, item_id: int, item: ItemUpdate) -> Optional[Dict]:
        """Update an item"""
        item_data = item.model_dump(exclude_unset=True)
        
        result = await supabase_service.update(
            "items",
            query={"id": item_id},
            data=item_data
        )
        return result.data[0] if result.data else None
    
    async def delete_item(self, item_id: int) -> bool:
        """Delete an item"""
        result = await supabase_service.delete(
            "items",
            query={"id": item_id}
        )
        return bool(result.data)

item_service = ItemService()
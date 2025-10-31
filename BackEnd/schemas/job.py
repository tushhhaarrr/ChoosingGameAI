from typing import Optional
from datetime import datetime
from pydantic import BaseModel


class StoryJobBase(BaseModel):
    theme:set

class storyJobResponse(BaseModel):
    theme:str

class StoryJobresponse(BaseModel):
    job_id:int 
    status:str
    create_at:datetime
    story_id:Optional[int]=None
    completed_at:Optional[datetime]=None
    error:Optional[str]=None

    class Config:
        from_attributes=True


class StoryJobCreate(StoryJobBase):
    pass

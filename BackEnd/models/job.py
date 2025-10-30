from sqlalchemy import Column,Integer,String,DateTime,Boolean,ForeignKey,JSON

from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from db.database import base


class StroyJob(base):
    __tablename__= "Story_Jobs"

    id=Column(Integer,primary_key=True,index=True)
    job_id=Column(String,index=True,unique=True)
    session_id=Column(String,index=True)
    theme=Column(String)
    Status=Column(String)
    Story_id=Column(Integer,nullable=True)
    error=Column(String,nullable=True)

    created_at=Column(DateTime(timezone=True),server_default=func.now())
    completed_job=Column(DateTime(timezone=True),nullable=True)
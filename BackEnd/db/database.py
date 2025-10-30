from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base


from core.config import settings


engine=create_engine(
    settings.DATABASE_URL
)

sessionlocal=sessionmaker(autocommit=False,autoflush=False,bind=engine)


base=declarative_base()

def get_db():
    db=sessionlocal()
    try:
        yield db
    finally:
        db.close()
def create_table():
    base.metadata.create_all(bind=engine)
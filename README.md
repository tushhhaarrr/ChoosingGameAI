<div align="center">ChoosingGameAI (Backend) 🤖🐍A cool API that makes "Choose Your Own Adventure" games using AI!</div>Hey there! This is a FastAPI backend that uses Google's Gemini AI to create one-of-a-kind, branching stories. You just give it a theme, and it builds a whole adventure. You can make them, save them, and pull them up whenever you want!✨ What It Can Do (The Cool Features)AI Story Writer: It uses Google's Gemini (hooked up with LangChain) to dream up fun, branching stories from just a single theme.No Waiting Around!: It uses FastAPI's BackgroundTasks to build the story in the background. This means the API feels super fast, and you're not stuck waiting!Getting the AI to Behave: This is the best part! We use a PydanticOutputParser to force the AI to give us a clean, nested JSON file. This makes it way easier to get the story into our database.Saving Your Stories: It saves all the generated stories—including all the different paths and choices—in a PostgreSQL database using SQLAlchemy."Is It Done Yet?" Tracker: You can check on your story while it's being made. It's got endpoints to see if your job is "pending," "working on it," or "all done!"🛠️ The Tech Stack (What's Under the Hood)🐍 Backend (Python)Framework: FastAPIAI Orchestration: LangChainThe Brains (LLM): Google Gemini (via langchain-google-genai)Database (ORM): SQLAlchemyDatabase (Driver): Psycopg2 (for PostgreSQL)Data Rules: PydanticSettings: python-dotenvServer: Uvicorn🚀 How It All WorksThe whole flow is built to be "async," which is just a fancy way of saying you don't have to sit around and wait for the AI!First, you send a POST request to /api/stories/create with a theme you want, like "Sci-fi."The backend gets this, immediately creates a "job" in the database, and marks it as "pending."It instantly sends you back the job_id so you know it's working on it.At the exact same time, it kicks off a BackgroundTask to do all the heavy lifting (the AI part).In the background, the StoryGenerator gets to work:It preps a special prompt (STORY_PROMPT) for the AI.It calls the Gemini AI to write the story.It grabs the (guaranteed clean!) JSON response.It cleverly saves the whole branching story into the database.Finally, it marks the job as "completed" and adds the new story_id.Meanwhile, you can check in on the job by pinging /api/jobs/{job_id}.Once it's "completed," just call /api/stories/{story_id}/complete to get your awesome new story!🏎️ Setup and InstallationWant to run this yourself? No problem! It's pretty straightforward.What You'll Need FirstPython (3.10 or newer)A PostgreSQL database up and runningA Google Gemini API KeyLet's Get the Backend Running# 1. Grab the code
git clone [https://github.com/tushhhaarrr/choosinggameai.git](https://github.com/tushhhaarrr/choosinggameai.git)
cd choosinggameai/BackEnd

# 2. Make a virtual environment (it's good practice!)
python -m venv venv
source venv/bin/activate
# On Windows, that's: .\venv\Scripts\activate

# 3. Install all the packages
# If you have uv:
uv pip install -r requirements.txt
# Or just with pip:
pip install -r requirements.txt

# 4. Create your .env file
# You can just copy the example file
cp .env.example .env

# 5. Edit the .env file with your info
# CHOREO_OPENAI_CONNECTION_GOOGLE_API_KEY="YOUR_GOOGLE_API_KEY"
# DB_USER="your_db_user"
# DB_PASSWORD="your_db_password"
# DB_HOST="localhost"
# DB_PORT="5432"
# DB_NAME="your_db_name"

# 6. Run the server!
# The database tables will be created automatically.
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
And you're all set! Your app should be running.Backend API: http://localhost:8000API Docs (try this!): http://localhost:8000/docs🏗️ The API EndpointsHere are the main routes you can hit:POST /api/stories/create:Body: { "theme": "string" }Response: A job ticket (job_id) with "pending" status.This kicks off the background task to make your story.GET /api/jobs/{job_id}:Response: The job's status.Poll this to check on your story's progress ("pending", "processing", "completed", or "failed").GET /api/stories/{story_id}/complete:Response: The whole story!Returns the full, nested story object, ready for a frontend (or anything, really) to use.🗃️ How the Data is Saved (Database Schema)This is how we keep track of the stories:story_jobs: This just tracks the story requests. What theme was it? Is it done yet? Did it fail?stories: This stores the main info, like the story's title.story_nodes: This is the big one! Each row is a "page" or a single part of the story.content: The text the user reads.is_root: A flag to show this is the start of the story.is_ending: A flag that means "Game Over!"is_winning_ending: Lets you know if it was a "good" ending.options: This is the magic! It's a JSON list of choices like [{"text": "Go left", "node_id": 5}, ...] that link to other nodes.📜 LicenseThis project uses the MIT License. Feel free to use the code!

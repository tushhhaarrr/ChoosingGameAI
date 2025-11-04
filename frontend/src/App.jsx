
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import StoryLoader from './Components/StoryLoader'


import './App.css'

function App() {
  return(
    <Router>
      <div className="app-container">
        <header>
          <h1>Interactive Story Generator</h1>
          </header>
          <main><Routes>
            <Route path={"/story/:id"} element={<StoryLoader/>}></Route>
            
            </Routes>
            </main>
        
      </div>
    </Router>
  )

}

export default App

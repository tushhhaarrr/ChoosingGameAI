import { useState } from "react";
function themeInut({onSubmit}){
    const[theme,setTheme]=useState("");
    const[error,setError]=useState("")

    const handleSubmit=(e)=>{
        e.prevenDefault();
        if(!theme.trim() ){
            setError("Please Enter a Theme Name")
            return
        }
        onSubmit(theme)
    
    }
    return <div className="Theme-input-container">
        <h2>Generate Your Adventure</h2>
        <p>Enter s Theme for YOur Interactive Story</p>
        <form onSubmit={handleSubmit}>
            <div className="input-Group">
                <input 
                type="text"
                value={theme}
                onChange={(e)=>setTheme(e.target.value)}
                />
            </div>
        </form>
    </div>
}

// import { useState } from "react";
// function Themeinput ({onSubmit}){
//     const[theme,setTheme]=useState("");
//     const[error,setError]=useState("")

//     const handleSubmit=(e)=>{
//         e.prevenDefault();
//         if(!theme.trim() ){
//             setError("Please Enter a Theme Name")
//             return
//         }
//         onSubmit(theme)
    
//     }
//     return <div className="Theme-input-container">
//         <h2>Generate Your Adventure</h2>
//         <p>Enter a Theme for Your Interactive Story</p>
//         <form onSubmit={handleSubmit}>
//             <div className="input-Group">
//                 <input 
//                 type="text"
//                 value={theme}
//                 onChange={(e)=>setTheme(e.target.value)}
//                 placeholder="Enter a theme (e.g.Scheme,Activa,Himalayan...)"
//                 className={error ? 'error':''}
//                 />
//                 {error && <p className="error-text">{error}</p>}

//             </div>
//             <button type="Submit" className="generate-btn">
//                 Generate Story
//             </button>
//         </form>
//     </div>
// }

// export default Themeinput;
import {useState} from "react"

function ThemeInput({onSubmit}) {
    const [theme, setTheme]= useState("");
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!theme.trim()) {
            setError("Please enter a theme name");
            return
        }

        onSubmit(theme);
    }

    return <div className="theme-input-container">
        <h2>Generate Your Adventure</h2>
        <p>Enter a theme for your interactive story</p>

        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    placeholder="Enter a theme (e.g. prirates, space, medieval...)"
                    className={error ? 'error' : ''}
                />
                {error && <p className="error-text">{error}</p>}
            </div>
            <button type="submit" className='generate-btn'>
                Generate Story
            </button>
        </form>
    </div>
}

export default ThemeInput;
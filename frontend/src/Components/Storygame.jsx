import { useState,useEffect } from "react";

function StoryGame({story,onNewStory}) {

    const[currentNodeId,setCurrentId]=useState(null);
    const[currentNode,setCurrentNodeId]=useState(null)
    const[options,setOptions]=useState([])
    const[isEnding,setIsEnding]=useState(false)
    const[isWinninEnding,setisWinningEnding]=useState(false)


    useEffect(()=>{
if (story && story.root_node){
    const rootNodeId=story.root_node.Id
    setCurrentNodeId(rootNodeId)
}

    },[story]
)
useEffect(()=>{
    if(currentNodeId &&story&&story.all_nodes){
        const node=story.all_nodes[currentNodeId]
        setcurrentNode(node)
        setIsEnding(node.is_Ending)
        setisWinningEnding(node.is_winning_ending)

        if(!node.is_Ending && node.options && node.options.length >0){
            setOptions(node.options)
        }else{
            setOptions([])

        }


    }

},[currentNodeId,story]
)
const chooseoption=(optionId)=>
    {
        setCurrentNodeId(optionId)

}
const restartStory=()=>{
    if(story &&story.root_Node.id){

    }
    }
    return <div className="Story-game">
        <header className="Story-Header">
            <h2>{story.title}</h2>
        </header>
        <div className="Story-content">
            {currentNode && <div className="story-node"></div>}
            <p>{currentNode}</p>

            {isEnding ?
            <div className="Story-Ending">
                <h3>{isWinninEnding ?"Congoratulations":"the ENd"}</h3>
                {isWinninEnding ? "you reached A winning ending ":"Your adventure has ended."}
                </div>
                :
          <div className="story-options">
            <h3>What will You Do?</h3>
            <div className="Options-list">
                {options.map((Option,index)=>{
                return <button 
                key={index}
                onClick={()=>chooseoption(options.node_id)}
                className="option-button"
                >
                    {options.text}

                </button>
            })}
                     </div>
                    </div>
                }
            </div>

            
<div className="story-controls">
    <button onClick={restartStory} className="reset-button">
    restart Story
    </button>

    
</div>
{onNewStory && <button onClick={onNewStory} className="new-story-button">
    New Story
</button>}
          </div>
}
export default StoryGame;
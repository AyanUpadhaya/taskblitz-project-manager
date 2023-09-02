import React, { createContext, useState } from "react";
import { db } from "../Data/data";
import "../App.css";
import ListCard from "../Components/ListCard";
export const GlobalState = createContext(null)

const BoardView = ({cardsCollections}) => {
  const allItems = cardsCollections.map(card =>{
    return [...card.items]
  })
  const allTasks = [].concat(...allItems)
  const [tasks, setTasks] = useState(allTasks);

  const handleDrop = (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    const updatedTasks = tasks.map((task) => {
      if (task.id.toString() === taskId) {
        task.status = status;
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleAddTask =(newTask)=>{
    setTasks([...tasks,newTask] )
  } 
  
  return (
    
    <div className="bg-[#8F3F65] min-h-screen">
      
      <div className="board text-base-200">
      <GlobalState.Provider
            value={{
              tasks,
              handleAddTask,
              handleDrop, 
              handleDragStart,
            }}
        >
        {
          cardsCollections.map(card=><ListCard card={card} key={card.id}/>)
        }
        </GlobalState.Provider>

      </div>
        
    </div>
  );
};

export default BoardView;

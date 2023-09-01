import React, { useState } from "react";
import { db } from "../Data/data";

import "../App.css";
import ListCard from "../Components/ListCard";
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
  return (
    <div className="bg-[#8F3F65] min-h-screen">
      <div className="board text-base-200">
        {
          cardsCollections.map(card=><ListCard card={card} key={card.id} handleDragStart={handleDragStart} handleDrop={handleDrop} tasks={tasks}  />)
        }
      </div>
        
    </div>
  );
};

export default BoardView;

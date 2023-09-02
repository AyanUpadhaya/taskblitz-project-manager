import React, { useContext, useRef, useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { GlobalState } from "../views/BoardView";
import { v4 as uuidv4 } from "uuid";
const Loader = () => {
  return <h1>Loading...</h1>;
};

const ListCard = ({ card }) => {
  const { handleDrop, handleDragStart, tasks,handleAddTask } = useContext(GlobalState);
  const [displayForm, setDisplayForm] = useState(false);
  const [newTask,setNewTask] = useState({id:uuidv4(),title:'',status:card.title.toLowerCase()});
  const inputRef = useRef()
  const addNewTaskToList =(e)=>{
      e.preventDefault();
      handleAddTask(newTask)
      setNewTask({id:tasks.length+1,title:'',status:card.title.toLowerCase()})
      inputRef.current.value = '';
  }
  console.log(newTask)

  return (
    <div>
      <div className="column">
        <h2 className="bg-secondary p-3 rounded-md text-accent-content font-semibold">
          {card.title}
        </h2>
        <div
          className="task-list font-semibold"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, card.title.toLowerCase())}
        >
          {tasks?.filter((task) => task?.status === card.title.toLowerCase())
            .map((task) => (
              <div
                className="task-card"
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id.toString())}
              >
                {task.title}
              </div>
            ))}
        </div>
        <button
          className={
            displayForm ? "hidden" : "text-center p-3 text-accent-content "
          }
          onClick={() => setDisplayForm(true)}
        >
          +add card
        </button>

        <div className={displayForm?'block':'hidden'}>
          <div>
            <input
              className="input input-bordered join-item text-white"
              placeholder="add task"
              onChange={(e)=>setNewTask({...newTask,title:e.target.value})}
              ref={inputRef}
            />
          </div>
          <div className="space-x-3 py-2">
            <button
              className="btn join-item"
              onClick={addNewTaskToList}
            >
              Add
            </button>
            <button
              className="btn join-item"
              onClick={() => setDisplayForm(false)}
            >
              Close
            </button>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ListCard;

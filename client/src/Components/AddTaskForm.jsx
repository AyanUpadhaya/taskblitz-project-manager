import { useContext, useRef, useState } from "react";
import { GlobalState } from "../views/BoardView";

const AddTaskForm = ({setDisplayForm,taskStatus,setListTasks}) => {
    const {tasks} = useContext(GlobalState);
    const [newTask,setNewTask] = useState({id:tasks.length++,title:'',status:taskStatus.toLowerCase()});
    const inputRef = useRef()
    const addNewTaskToList =(e)=>{
        e.preventDefault();
        setListTasks((prev)=>[...prev,newTask]);
        setNewTask({id:tasks.length++,title:'',status:taskStatus.toLowerCase()});
        inputRef.current.value = '';
    }

    return (
      <div>
        <div>
          <div>
            <input
              className="input input-bordered join-item text-white"
              placeholder="add task"
              ref={inputRef}
              onChange={(e)=>setNewTask({...newTask,title:e.target.value})}
            />
          </div>
        </div>
        <div className="space-x-3 py-2">
          <button className="btn join-item" onClick={(e)=>addNewTaskToList(e)}>Add</button>
          <button className="btn join-item" onClick={()=>setDisplayForm(false)}>Close</button>
        </div>
      </div>
    );
};

export default AddTaskForm;
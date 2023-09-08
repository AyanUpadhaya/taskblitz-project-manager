import React, { useContext, useRef, useState, useMemo } from "react";
import AddTaskForm from "./AddTaskForm";
import { GlobalState } from "../views/BoardView";
import { v4 as uuidv4 } from "uuid";

const ListCard = ({ card }) => {
  const { handleDrop, handleDragStart, tasks, handleAddTask,handleUpdateTask,handleTaskDelete } =
    useContext(GlobalState);
  const [displayForm, setDisplayForm] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [editedTask,setEditedTask] = useState('')
  const inputRef = useRef();
  const addNewTaskToList = (e) => {
    e.preventDefault();
    handleAddTask({
      id: uuidv4(),
      title: newTask,
      status: card.title.toLowerCase(),
    });
    inputRef.current.value = "";
  };
  const updateTask = (taskId) => {
    const findTask = tasks.find(task => task.id === taskId);
    findTask.title = editedTask.toLowerCase();
    handleUpdateTask(findTask)
  };
  

  const deleteTask = (taskId) => {
    handleTaskDelete(taskId)
  };

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
          {tasks
            ?.filter((task) => task?.status === card.title.toLowerCase())
            .map((task) => (
              <div
                className="task-card"
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id.toString())}
              >
                <div className="flex justify-between items-center space-x-2">
                  <div className="text-left">{task.title}</div>
                  <div>
                    <button
                      className="btn"
                      onClick={() =>
                        document
                          .getElementById(`task-${task.id.toString()}`)
                          .showModal()
                      }
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                  </div>
                </div>
                <dialog id={`task-${task.id.toString()}`} className="modal">
                  <div className="modal-box w-3/4 max-w-3xl">
                    <div className="s">
                      <form method="dialog">
                        <div className="my-3">
                          <div className="mb-6 flex">
                            <input
                              type="text"
                              className="border border-white w-full p-2.5 
                              text-whiterounded-e-none"
                              defaultValue={task.title}
                              onBlur={(e)=>setEditedTask(e.target.value)}
                            />
                            <button className="btn btn-primary rounded-s-none" onClick={()=>updateTask(task.id)}>Update</button>
                          </div>
                        </div>
                        <div className="space-x-3">
                        <button className="btn" onClick={()=>deleteTask(task.id)}>Delete</button>
                        <button className="btn btn-secondary">Close</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </dialog>
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

        <div className={displayForm ? "block" : "hidden"}>
          <div>
            <input
              className="input input-bordered join-item text-white"
              placeholder="add task"
              onBlur={(e) => setNewTask(e.target.value)}
              ref={inputRef}
            />
          </div>
          <div className="space-x-3 py-2">
            <button className="btn join-item" onClick={addNewTaskToList}>
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

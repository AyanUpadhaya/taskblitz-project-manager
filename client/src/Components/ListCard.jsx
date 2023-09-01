import React from "react";

const ListCard = ({card,handleDrop,handleDragStart,tasks}) => {
  return (
    <div>
      <div className="column">
        <h2 className="bg-secondary p-3 rounded-md text-accent-content font-semibold">{card.title}</h2>
        <div
          className="task-list font-semibold"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, card.title.toLowerCase())}
        >
          {tasks.filter((task) => task.status === card.title.toLowerCase())
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
        <button className="text-center p-3 text-accent-content">
            +add card
        </button>
      </div>
    </div>
  );
};

export default ListCard;

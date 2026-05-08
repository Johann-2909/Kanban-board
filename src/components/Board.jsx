import { useState, useEffect, use } from "react";

function Board() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "...", column: "todo" },
    { id: 2, title: "Task 2", description: "...", column: "inprogress" },
  ]);
  const todoTasks = tasks.filter((task) => task.column === "todo");

  return (
    <div className="board">
      <h1>Kanban Board</h1>
      { todoTasks.map((task) => (
        <div key={task.id} className="task">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      )) }
    </div>
  );
}
export default Board;

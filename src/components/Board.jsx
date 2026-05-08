import { useState } from "react";
import Column from "./Column";
import AddTask from "./AddTask";

function Board() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "...", column: "todo" },
    { id: 2, title: "Task 2", description: "...", column: "inprogress" },
  ]);
  const todoTasks = tasks.filter((task) => task.column === "todo");
  const inProgressTasks = tasks.filter((task) => task.column === "inprogress");
  const doneTasks = tasks.filter((task) => task.column === "done");

  function addTask(title, description, column) {
    const newTask = {
      id: Date.now(),
      title,
      description,
      column: column,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="board">
      <h1>Kanban Board</h1>
      <Column
        title="To Do"
        columnId="todo"
        cards={todoTasks}
        addTask={addTask}
      />
      <Column
        title="In Progress"
        columnId="inprogress"
        cards={inProgressTasks}
        addTask={addTask}
      />
      <Column
        title="Done"
        columnId="done"
        cards={doneTasks}
        addTask={addTask}
      />
    </div>
  );
}
export default Board;

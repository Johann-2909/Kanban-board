import { useState, useEffect } from "react";
import Column from "./Column";
import AddTask from "./AddTask";
import { DragDropContext } from "@hello-pangea/dnd";

function Board() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      { id: 1, title: "Task 1", description: "...", column: "todo" },
      { id: 2, title: "Task 2", description: "...", column: "inprogress" },
    ],
  );
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


  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function moveTask(id, newColumn) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, column: newColumn };
        }
        return task;
      }),
    );
  }

  function handleDragEnd(result) {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) return;
    moveTask(parseInt(draggableId), destination.droppableId);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <header>
        <h1>Kanban Board</h1>
      </header>
      <div className="board">
        <Column
          title="To Do"
          columnId="todo"
          cards={todoTasks}
          addTask={addTask}
          deleteTask={deleteTask}
        />
        <Column
          title="In Progress"
          columnId="inprogress"
          cards={inProgressTasks}
          addTask={addTask}
          deleteTask={deleteTask}
        />
        <Column
          title="Done"
          columnId="done"
          cards={doneTasks}
          addTask={addTask}
          deleteTask={deleteTask}
        />
      </div>
    </DragDropContext>
  );
}
export default Board;

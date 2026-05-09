import { useState } from "react";
import Column from "./Column";
import AddTask from "./AddTask";
import { DragDropContext } from "@hello-pangea/dnd";

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

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="board">
        <h1>Kanban Board</h1>
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

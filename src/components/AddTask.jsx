import { useState } from "react";

function AddTask({ addTask, columnId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleAddTask = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title, description, columnId);
    setTitle("");
    setDescription("");
    setIsOpen(false);
  };

  return (
    <div className="add-task">
      {isOpen ? (
        <form onSubmit={handleSubmit}>
          <h4>Add Task</h4>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit">Add</button>
          <button type="button" onClick={toggleAddTask} className="cancel-btn">
            Cancel
          </button>
        </form>
      ) : (
        <button onClick={toggleAddTask}>+</button>
      )}
    </div>
  );
}

export default AddTask;

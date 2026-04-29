function Todo({ task, togglePopup }) {
  function handleClick() {
    alert(`Task "${task}" gelöscht!`);
  }

  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <button onClick={togglePopup}>Delete</button>
    </div>
  );
}

export default Todo;
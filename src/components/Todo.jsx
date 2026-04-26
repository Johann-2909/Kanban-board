function Todo({ task }) {
  function handleClick() {
    alert(`Task "${task}" gelöscht!`);
  }

  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Todo;
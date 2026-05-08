function AddTask() {
  return (
    <div className="add-task">
      <h2>Add Task</h2>
      <form>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Description"></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
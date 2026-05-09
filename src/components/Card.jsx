function Card({ title, description, deleteTask, id }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
}
export default Card;

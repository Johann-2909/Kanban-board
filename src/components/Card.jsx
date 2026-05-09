import { Draggable } from "@hello-pangea/dnd";

function Card({ title, description, deleteTask, id, index }) {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => deleteTask(id)}>Delete</button>
          </div>
        </div>
      )}
    </Draggable>
  );
}
export default Card;

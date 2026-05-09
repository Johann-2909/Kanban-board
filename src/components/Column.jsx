import Card from "./Card";
import AddTask from "./AddTask";
import { Droppable } from "@hello-pangea/dnd";

function Column({ title, cards, addTask, columnId, deleteTask }) {
  return (
    <div className="column">
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h2>{title}</h2>
            <div className="cards">
              {cards.map((card, index) => (
                <Card
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  index={index}
                  deleteTask={deleteTask}
                />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AddTask addTask={addTask} columnId={columnId} />
    </div>
  );
}
export default Column;

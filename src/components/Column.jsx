import Card from "./Card";

function Column({ title, cards }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
export default Column;

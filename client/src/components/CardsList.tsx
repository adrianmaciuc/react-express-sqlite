import Card from "./Card";
import { CardInterface } from "./Card.interface";

interface CardsListProps {
  cards: CardInterface[];
}

function CardsList({ cards }: CardsListProps) {
  return (
    <>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          developer={card.developer}
          QA={card.QA}
          manager={card.manager}
          task={card.task}
          teamName={card.teamName}
        />
      ))}
    </>
  );
}

export default CardsList;

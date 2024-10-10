import Card from "./Card";
import { CardsListProps } from "../types";

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
          teamname={card.teamname}
        />
      ))}
    </>
  );
}

export default CardsList;

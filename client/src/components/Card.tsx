import { CardInterface } from "./types";

export default function Card(cards: CardInterface) {
  return (
    <>
      <li className="cs-item">
        <span className="cs-number">{cards.id}</span>
        <h3 className="cs-h3">{cards.teamname}</h3>
        <div>
          <p className="cs-item-text">Dev: {cards.developer}</p>
          <p className="cs-item-text">QA: {cards.QA}</p>
          <p className="cs-item-text">Manager: {cards.manager}</p>
          <p className="cs-item-text">Task: {cards.task}</p>
        </div>
        <a href="" className="cs-button-6" aria-label="view task">
          View Task
        </a>
      </li>
    </>
  );
}

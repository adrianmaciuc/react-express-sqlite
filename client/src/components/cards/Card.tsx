import { CardInterface } from "../types";
import { Link } from "react-router-dom";

export default function Card(cards: CardInterface) {
  return (
    <>
      <li className="cs-item">
        <span data-testid="card-id" className="cs-number">
          {cards.id}
        </span>
        <h3 data-testid="card-teamname" className="cs-h3">
          {cards.teamname}
        </h3>
        <div>
          <p data-testid="card-developer" className="cs-item-text">
            Dev: {cards.developer}
          </p>
          <p data-testid="card-qa" className="cs-item-text">
            QA: {cards.QA}
          </p>
          <p data-testid="card-manager" className="cs-item-text">
            Manager: {cards.manager}
          </p>
          <p data-testid="card-task" className="cs-item-text">
            Task: {cards.task}
          </p>
        </div>
        <Link
          to={`/team/${cards.id}`}
          data-testid="view-task-btn"
          className="cs-button-6"
          aria-label="view task"
        >
          View Team
        </Link>
      </li>
    </>
  );
}

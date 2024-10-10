import { BackButton } from "./cards/buttons";
import { CardInterface } from "./types";
import { DeveloperCard } from "./cards/DeveloperCard";
import { QACard } from "./cards/QACard";
import { ManagerCard } from "./cards/ManagerCard";

export const TeamScreen = ({
  developer,
  QA,
  manager,
  task,
  teamname,
}: CardInterface) => {
  return (
    <div className="cs-container">
      <div className="cs-content">
        <section id="meet-team-977">
          <div className="cs-container">
            <div className="cs-content">
              <span className="cs-topper">Our Team</span>
              <h2 className="cs-title">{teamname}</h2>
              <p className="cs-text">Task Assigned: {task}</p>
            </div>
            <ul className="cs-card-group">
              <li className="cs-item" data-testid="team-member-1">
                <DeveloperCard developer={developer} />
              </li>
              <li className="cs-item" data-testid="team-member-2">
                <QACard QA={QA} />
              </li>
              <li className="cs-item" data-testid="team-member-3">
                <ManagerCard manager={manager} />
              </li>
            </ul>
          </div>
        </section>
      </div>
      <BackButton />
    </div>
  );
};

export default TeamScreen;

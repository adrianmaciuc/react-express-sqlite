import { CardInterface } from "./types";

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
              <li className="cs-item">
                <picture className="cs-picture">
                  {/*Mobile Image*/}
                  <source
                    media="(max-width: 600px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist1.jpg"
                  />
                  {/*Tablet and above Image*/}
                  <source
                    media="(min-width: 601px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist1.jpg"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist1.jpg"
                    alt="stylist"
                    width={320}
                    height={400}
                  />
                </picture>
                <div className="cs-info">
                  <span className="cs-name">{developer}</span>
                  <span className="cs-job">Developer</span>
                  <div className="cs-social-group">
                    <a href="" className="cs-link" aria-label="visit linkedin">
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/linkedin-gold.svg"
                        alt="linkedin"
                        width={12}
                        height={12}
                      />
                    </a>
                    <a
                      href=""
                      className="cs-link"
                      aria-label="visit instragram"
                    >
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-gold.svg"
                        alt="instragram"
                        width={12}
                        height={12}
                      />
                    </a>
                    <a href="" className="cs-link" aria-label="visit youtube">
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube-gold.svg"
                        alt="youtube"
                        width={12}
                        height={12}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="cs-item">
                <picture className="cs-picture">
                  {/*Mobile Image*/}
                  <source
                    media="(max-width: 600px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist2.jpg"
                  />
                  {/*Tablet and above Image*/}
                  <source
                    media="(min-width: 601px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist2.jpg"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist2.jpg"
                    alt="stylist"
                    width={320}
                    height={400}
                  />
                </picture>
                <div className="cs-info">
                  <span className="cs-name">{QA}</span>
                  <span className="cs-job">QA Engineer</span>
                  <div className="cs-social-group">
                    <a href="" className="cs-link" aria-label="visit linkedin">
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/linkedin-gold.svg"
                        alt="linkedin"
                        width={12}
                        height={12}
                      />
                    </a>

                    <a
                      href=""
                      className="cs-link"
                      aria-label="visit instragram"
                    >
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-gold.svg"
                        alt="instragram"
                        width={12}
                        height={12}
                      />
                    </a>
                    <a href="" className="cs-link" aria-label="visit youtube">
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube-gold.svg"
                        alt="youtube"
                        width={12}
                        height={12}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="cs-item">
                <picture className="cs-picture">
                  {/*Mobile Image*/}
                  <source
                    media="(max-width: 600px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist3.jpg"
                  />
                  {/*Tablet and above Image*/}
                  <source
                    media="(min-width: 601px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist3.jpg"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist3.jpg"
                    alt="stylist"
                    width={320}
                    height={400}
                  />
                </picture>
                <div className="cs-info">
                  <span className="cs-name">{manager}</span>
                  <span className="cs-job">Manager</span>
                  <div className="cs-social-group">
                    <a href="" className="cs-link" aria-label="visit linkedin">
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/linkedin-gold.svg"
                        alt="linkedin"
                        width={12}
                        height={12}
                      />
                    </a>

                    <a
                      href=""
                      className="cs-link"
                      aria-label="visit instragram"
                    >
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-gold.svg"
                        alt="instragram"
                        width={12}
                        height={12}
                      />
                    </a>
                    <a href="" className="cs-link" aria-label="visit youtube">
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube-gold.svg"
                        alt="youtube"
                        width={12}
                        height={12}
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamScreen;

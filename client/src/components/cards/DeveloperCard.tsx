interface DeveloperCardProps {
  developer: string;
}

export const DeveloperCard = ({ developer }: DeveloperCardProps) => {
  return (
    <>
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
      <div className="cs-info" data-testid="developer-info">
        <span className="cs-name">{developer}</span>
        <span className="cs-job">Developer</span>
        <div className="cs-social-group">
          <a href="" className="cs-link" aria-label="visit linkedin">
            <img
              className="cs-icon"
              data-testid="linkedin"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/linkedin-gold.svg"
              alt="linkedin"
              width={12}
              height={12}
            />
          </a>
          <a href="" className="cs-link" aria-label="visit instragram">
            <img
              className="cs-icon"
              data-testid="instagram"
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
              data-testid="youtube"
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
    </>
  );
};

export default DeveloperCard;

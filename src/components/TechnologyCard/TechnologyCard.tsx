import "./technologyCard.scss";

type Props = {
  img: string;
  title: string;
  labels: string[];
};

const TechnologyCard = ({ img, title, labels }: Props) => {
  return (
    <div className="technologyCard">
      {labels.length > 0 && (
        <div className="technologyCard__labels">
          {labels.map((label) => {
            return <span key={label}>{label}</span>;
          })}
        </div>
      )}
      <img src={img} alt={`${title}-image`} className="technologyCard__img" />
      <p className="technologyCard__title">{title}</p>
    </div>
  );
};

export default TechnologyCard;

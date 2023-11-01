import "./technologyCard.scss";

type Props = {
  img: string;
  title: string;
};

const TechnologyCard = ({ img, title }: Props) => {
  return (
    <div className="technologyCard">
      <img src={img} alt={`${title}-image`} className="technologyCard__img" />
      <p className="technologyCard__title">{title}</p>
    </div>
  );
};

export default TechnologyCard;

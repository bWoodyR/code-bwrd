import "./subheaderTitle.scss";

type Props = {
  title: string;
};

const SubheaderTitle = ({ title }: Props) => {
  return <h2 className="subheaderTitle">{title.toUpperCase()}</h2>;
};

export default SubheaderTitle;

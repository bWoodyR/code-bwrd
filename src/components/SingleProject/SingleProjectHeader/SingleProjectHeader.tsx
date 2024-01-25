import "./singleProjectHeader.scss"

type SingleProjectHeaderProps = {
    title: string, 
    inDevelopment: boolean
}

const SingleProjectHeader = ({title, inDevelopment}: SingleProjectHeaderProps) => {
  return (
    <>
      <h1 className="singleProjectHeader__title">{title}</h1>
      {inDevelopment && <span className="singleProjectHeader__label">IN DEVELOPMENT</span>}
    </>
  );
}

export default SingleProjectHeader
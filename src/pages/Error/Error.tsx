import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";
import "./error.scss";

const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    console.log(error);
    return (
      <section className="error">
        <p className="error__message">{error.data}</p>
        <Link to="/" className="error__redirectLink">
          Main Page
        </Link>
      </section>
    );
  } else return <>Something went wrong</>;
};

export default Error;

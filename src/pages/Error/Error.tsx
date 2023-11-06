import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import "./error.scss";

const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    console.log(error);
    return (
      <>
        <h1>{error.statusText}</h1>
        <p>{error.data}</p>
      </>
    );
  } else return <>Something went wrong</>
};

export default Error;

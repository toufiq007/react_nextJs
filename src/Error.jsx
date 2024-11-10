import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError(); // to get the error use this useRouteError hook from react-router-dom
  //   console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

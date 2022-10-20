import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>This is the welcome page</h1>
      <Route path="/welcome/hello">
        <h1>Hello my friend</h1>
      </Route>
    </>
  );
};

export default Welcome;

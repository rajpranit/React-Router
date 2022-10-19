import { Route } from "react-router-dom";

import Welcome from "./pages/welcome";
import Product from "./pages/products";

function App() {
  return (
    <>
      <div>
        <Route path="/welcome">
          <Welcome />
        </Route>
      </div>
    </>
  );
}

export default App;

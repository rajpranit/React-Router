import { Route } from "react-router-dom";

import Welcome from "./pages/welcome";
import MainHeader from "./components/MainHeader";
import Product from "./pages/products";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <div>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
        </div>
      </main>
    </>
  );
}

export default App;

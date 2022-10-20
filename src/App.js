import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./pages/welcome";
import ProductDetail from "./pages/product-detail";
import MainHeader from "./components/MainHeader";
import Product from "./pages/products";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <div>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/welcome" />
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/products" exact>
              <Product />
            </Route>
            <Route path="/products/:productId">
              <ProductDetail />
            </Route>
          </Switch>
        </div>
      </main>
    </>
  );
}

export default App;

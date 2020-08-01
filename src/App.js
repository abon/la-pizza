import React from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchPizzas } from "./redux/actions/pizzas";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(dispatch(fetchPizzas()));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact component={Home} />
      </div>
      <Route exact path="/cart" component={Cart} />
    </div>
  );
}

export default App;

// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

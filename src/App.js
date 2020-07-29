import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setPizzas } from "./redux/actions/pizzas";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import "./App.css";

const API_URL = "http://localhost:3000//db.json";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get(API_URL).then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
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

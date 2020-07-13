import React, { useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import store from "./redux/store";
import { setPizzas } from "./redux/actions/pizzas";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import "./App.css";

const API_URL = "http://localhost:3000//db.json";

class App extends React.Component {
  componentDidMount() {
    axios.get(API_URL).then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            exact
            path="/"
            render={() => <Home items={this.props.items} />}
          />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  };
};

//shorter way
// const mapDispatchToProps = {
//   setPizzas,
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);

////// function App() {
//   // const [pizzas, setPizzas] = useState([]);

////   React.useEffect(() => {
////     axios.get(API_URL).then(({ data }) => {
////       setPizzas(data.pizzas);
////     });
////   }, []);

////   return
//// }

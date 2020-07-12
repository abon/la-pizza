import React, { useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import "./App.css";

const API_URL = "http://localhost:3000//db.json";

function App() {
  const [pizzas, setPizzas] = useState([]);

  React.useEffect(() => {
    axios.get(API_URL).then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;

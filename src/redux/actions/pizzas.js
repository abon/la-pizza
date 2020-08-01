import axios from "axios";

const API_URL = "http://localhost:3001/pizzas";

export const fetchPizzas = () => (dispatch) => {
  axios.get(API_URL).then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

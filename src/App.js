import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./actions/product.actions";
import { fetchJson } from "./actions/jsonapi.actions";

const App = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.product);
  const { jsondata } = useSelector((state) => state.jsonapis);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchJson());
  }, [dispatch]);

  return (
    <>
      <h2>Products</h2>
      {list.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}

      <h2>JSON API</h2>
      {jsondata.slice(0, 5).map((j) => (
        <div key={j.id}>{j.title}</div>
      ))}
    </>
  );
};

export default App;

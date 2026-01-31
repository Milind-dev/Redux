// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { fetchProducts } from "../actions/product.actions";

// const Products = () => {
//   const dispatch = useDispatch();
//   const { list, loading, error } = useSelector((state) => state.product);

//   useEffect(() => {
//     // dispatch(fetchProducts());
//   }, [dispatch]);

//   if (loading) return <h3>Loading...</h3>;
//   if (error) return <h3>{error}</h3>;

//   return (
//     <div>
//       <h2>Products</h2>
//       {list.map((p) => (
//         <div key={p.id}>
//           <strong>{p.title}</strong>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;

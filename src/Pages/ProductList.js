import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductList();
    console.log(products)
  }, []);

  const fetchProductList = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Products fetching failed", error));
  };
  return <>
    <div className="product-list">
      {products?.length>0 &&products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>

  </>;
};
export default ProductList;

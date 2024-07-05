import React from "react";
import styles from './Product.module.css'; 
const Product=({product})=>{
    return (
        <div className="styles.product">
          <img src={product.image} alt={product.title} />
          <div className="styles.details">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
          </div>
        </div>
      );
}
export default Product;
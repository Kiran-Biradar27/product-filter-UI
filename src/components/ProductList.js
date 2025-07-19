import React from 'react';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Brand: {product.brand}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

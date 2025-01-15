import React from "react";

const ProductTags = ({ products, isProductShowing }) => {
  if (!isProductShowing) {
    return null;
  }
  return (
    <>
      {products.map((product, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            top: product.position.top,
            left: product.position.left,
          }}
          className="bg-white p-2 rounded shadow-lg cursor-pointer"
        >
          <a href={product.link} className="text-black text-sm">
            {product.name}
          </a>
        </div>
      ))}
    </>
  );
};

export default ProductTags;

import React from "react";

const Product = ({ name, vote, onVote, products, index }) => {
  const plus = () => {
    products[index].votes += 1;
    onVote(products);
  };
  const minus = () => {
    products[index].votes -= 1;
    onVote(products);
  };

  return (
    <li>
      <span>{name}</span> - <span>votes: {vote}</span>
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
};

export const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);
  const onVote = (dir) => {
    setProducts([...dir]);
  };

  return (
    <ul>
      {products.map((product, index) => (
        <Product
          onVote={onVote}
          products={products}
          index={index}
          key={index}
          name={product.name}
          vote={product.votes}
        />
      ))}
    </ul>
  );
};

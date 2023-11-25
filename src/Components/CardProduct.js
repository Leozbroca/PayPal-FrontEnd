import React from "react";
import { Main, Photo } from "./styles";

const CardProduct = ({ name, photo, id, price, setCart }) => {
  const addingCart = () => {
    let actualCart = JSON.parse(localStorage.getItem("cart"));

    if (!actualCart) {
      actualCart = [];
      localStorage.setItem("cart", JSON.stringify([]));
    } else {
      let cartExists = actualCart.find((p) => p.name === name);
      if (cartExists) {
        return;
      }

      localStorage.setItem(
        "cart",
        JSON.stringify([...actualCart, { name, id, price }])
      );
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  };

  return (
    <Main>
      <Photo
        style={{
          backgroundImage: `url(${photo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <p className="name">Name:{name}</p>
      <p className="item-number">Item Number:{id}</p>
      <p className="price">
        Price:
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </p>
      <button onClick={() => addingCart()}>add to cart</button>
    </Main>
  );
};

export default CardProduct;

import React, { useState, useEffect } from "react";
import {
  MainHome,
  ShoppingCart,
  CartBottom,
  CartItems,
  CartItem,
  CartTop,
  CartInfoTop,
  Products,
  CustomForm,
  CartInfo1,
  CartInfo2,
  ProductsScreen,
  EmptyCart,
} from "./styles";
import CardProduct from "../Components/CardProduct";
import Keyboard from "../Assets/Keyboard.jpeg";
import Mouse from "../Assets/Mouse.jpeg";
import Monitor from "../Assets/Monitor.jpeg";
import MotherBoard from "../Assets/MotherBoard.jpeg";
import VideoCard from "../Assets/VideoCard.jpeg";
import MemoryRam from "../Assets/MemoryRam.jpeg";
import Cooler from "../Assets/Cooler.jpeg";
import Cabinet from "../Assets/Cabinet.jpeg";
import PaypalCheckoutButton from "../PaypalButton/PaypalCheckoutButton";
import useForm from "../Hooks/useForm";

const Home = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [form, onChange] = useForm({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    state: "",
    postalCode: "",
    country: "",
  });

  useEffect(() => {
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([]));
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [cart]);

  const removeItem = (id) => {
    const LocalCart = JSON.parse(localStorage.getItem("cart"));
    console.log(LocalCart);

    let index = LocalCart.findIndex((i) => i.id === id);
    console.log(index);
    if (LocalCart[index] !== -1) {
      LocalCart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(LocalCart));
    setCart(JSON.parse(localStorage.getItem("cart")));
  };

  return (
    <MainHome>
      <CartInfoTop>
        <CustomForm>
          <CartInfo1>
            <h1>User Information</h1>
            <input
              placeholder="Name"
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
            ></input>
            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              value={form.lastName}
              onChange={onChange}
            ></input>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
            ></input>
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              value={form.phoneNumber}
              onChange={onChange}
            ></input>
          </CartInfo1>
          <CartInfo2>
            <h1>Shipping Address</h1>
            <input
              name="address1"
              type="text"
              placeholder="Address 1"
              value={form.address1}
              onChange={onChange}
            ></input>
            <input
              name="address2"
              type="text"
              placeholder="Address 2"
              value={form.address2}
              onChange={onChange}
            ></input>
            <input
              name="state"
              type="text"
              placeholder="State"
              value={form.state}
              onChange={onChange}
            ></input>
            <input
              name="postalCode"
              type="text"
              placeholder="Postal Code"
              value={form.postalCode}
              onChange={onChange}
            ></input>
            <input
              name="country"
              type="text"
              placeholder="Country"
              value={form.country}
              onChange={onChange}
            ></input>
          </CartInfo2>
        </CustomForm>
      </CartInfoTop>
      <Products>
        <h1>Products</h1>
        <ProductsScreen>
          <CardProduct
            name={"Keyboard"}
            id={1}
            price={80}
            photo={Keyboard}
            setCart={setCart}
          />
          <CardProduct
            name={"Mouse"}
            id={2}
            price={40}
            photo={Mouse}
            setCart={setCart}
          />
          <CardProduct
            name={"Monitor"}
            id={3}
            price={100}
            photo={Monitor}
            setCart={setCart}
          />
          <CardProduct
            name={"MotherBoard"}
            id={4}
            price={250}
            photo={MotherBoard}
            setCart={setCart}
          />
          <CardProduct
            name={"Cabinet"}
            id={5}
            price={75}
            photo={Cabinet}
            setCart={setCart}
          />
          <CardProduct
            name={"MemoryRam"}
            id={6}
            price={90}
            photo={MemoryRam}
            setCart={setCart}
          />
          <CardProduct
            name={"VideoCard"}
            id={7}
            price={95}
            photo={VideoCard}
            setCart={setCart}
          />
          <CardProduct
            name={"Cooler"}
            id={8}
            price={20}
            photo={Cooler}
            setCart={setCart}
          />
        </ProductsScreen>
      </Products>
      <ShoppingCart>
        <CartTop>
          <p>Shopping Cart</p>
        </CartTop>

        <CartItems>
          {!cart || cart.length === 0 ? (
            <EmptyCart>
              <p>Empty cart</p>
            </EmptyCart>
          ) : (
            cart.map((item) => {
              return (
                <CartItem>
                  {item.name}
                  <button onClick={() => removeItem(item.id)}>x</button>
                </CartItem>
              );
            })
          )}
        </CartItems>
        <CartBottom>
          <PaypalCheckoutButton/>
        </CartBottom>
      </ShoppingCart>
    </MainHome>
  );
};

export default Home;

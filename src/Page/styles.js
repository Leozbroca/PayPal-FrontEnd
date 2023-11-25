import styled from "styled-components";

export const MainHome = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 120px;
  background-color: #e7e7e7;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const ShoppingCart = styled.div`
  width: 20%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border-left: 1px solid black;

  .paypal {
    width: 80%;
    margin-top: 20px;
  }
`;
export const CartTop = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  margin-top: 120px;

  p {
    letter-spacing: 1px;
  }
`;

export const CartItems = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: x;
  flex-flow: column wrap;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #e0e0e0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2d0c5e;
  }
  background-color: white;
  margin-top: 170px;
`;

export const CartBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-top: 20px;
  flex-wrap: wrap;
`;

export const CartInfoTop = styled.div`
  height: 230px;
  background-color: #edf2ff;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 10px;
`;

export const CartInfo1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
export const CartInfo2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Products = styled.div`
  background-color: #edf2ff;
  display: flex;
  justify-content: center;
  margin-right: 20px;
  flex-wrap: wrap;

  h1 {
    letter-spacing: 2px;
    font-size: 60px;
  }
`;

export const CustomForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h1 {
    margin-top: 0;
  }

  input {
    width: 200px;
    margin-bottom: 10px;
  }
`;

export const ProductsScreen = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 20px;
  width: 100%;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

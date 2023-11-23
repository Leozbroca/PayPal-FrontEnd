import styled from "styled-components";

export const MainHome = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 120px;
`;

export const Teste = styled.p``;

export const ShoppingCart = styled.div`
  width: 300px;
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
  border-top: 1px solid black;

  .paypal {
    width: 80%;
    margin-top: 20px;
  }
`;
export const CartTop = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
  display: flex;
  align-items: end;
  justify-content: center;
  height:100px;
`;

export const CartItems = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
  display: flex;
  align-items: end;
  justify-content: center;
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
`;

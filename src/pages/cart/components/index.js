import React, { useState, useEffect } from "react";

import * as components from "./component";
import * as text from "../../../components/text";

import api from "../../../api";

import CartResume from "./CartResume";
import CartItem from "./CartItem";

export default function CartList() {
  const [carResult, setCartResult] = useState([]);
  const [cartTotal, setCartTotal] = useState("0");
  const [error, setError] = useState({ error: false, message: null });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      async function getCart() {
        try {
          const response = await api.get("/cart");
          setCartResult(response.data.newResult);
          setCartTotal(response.data.totalPrice);
        } catch (error) {
          setError({ error: true, message: error.response.data });
        }
      }
      getCart();
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);

  if (!error.error) {
    return (
      <>
        <components.PageNameBox>
          <text.BigBold>Seu Carrinho</text.BigBold>
          <text.SmallSemiBold>{carResult.length} itens</text.SmallSemiBold>
        </components.PageNameBox>
        <components.CartContainer>
          <components.CartListContainer>
            {carResult.map((value) => {
              return (
                <CartItem
                  key={value.id_product}
                  id={value.id_product}
                  image={value.image}
                  name={value.name}
                  qty={value.quantity}
                  price={value.price}
                />
              );
            })}
          </components.CartListContainer>
          <components.ResumeContainer>
            <CartResume value={cartTotal} />
          </components.ResumeContainer>
        </components.CartContainer>
      </>
    );
  } else {
    return (
      <>
        <text.BigBold style={{ margin: "10% auto", width: "fit-content" }}>
          {error.message}
        </text.BigBold>
      </>
    );
  }
}
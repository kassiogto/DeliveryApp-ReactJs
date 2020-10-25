import React from 'react';

import { CartArea, CartHeader, CartIcon, CartText, CartBody } from './styles';

function Cart() {
  return (
  <CartArea>
      <CartHeader>
          <CartIcon src='/assets/cart.png' />
          <CartText>Meu Carrinho (x)</CartText>
      </CartHeader>
      <CartBody>

      </CartBody>
  </CartArea>
  );
}

export default Cart;
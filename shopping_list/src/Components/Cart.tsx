import React from 'react';
import CartItem from "./CartItem";
import { type CartItemType } from '../types/types';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';


interface CartProps{
  cart: CartItemType[];
  updateQuantity: (id:number, qty: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const Cart: React.FC<CartProps> = ({
  cart,
  updateQuantity,
  removeItem,
  clearCart,
}) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = cart.length > 0 ? 12.41 : 0;
  const total = subtotal + shipping;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box>
        <Typography component="div" variant="h2">
          My Products
        </Typography>
        <Button onClick={clearCart}>Delete all</Button>
      </Box>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      ))}

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box>
          <span>Subtotal</span>
          <span>{subtotal.toFixed(2)} €</span>
        </Box>
        <Box>
          <span>Shipping</span>
          <span>{shipping ? shipping.toFixed(2) + " €" : "— — —"}</span>
        </Box>
        <Box>
          <span>Total (EUR)</span>
          <span>{total.toFixed(2)} €</span>
        </Box>
        <Button>Confirm order</Button>
      </Box>
      </Box>
  );
};

export default Cart;
import CartItem from "./CartItem";
import { type CartItemType } from "../types/ShoopingList";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

type CartProps = {
  cart: CartItemType[];
  updateQuantity: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
};

const Cart = ({ cart, updateQuantity, removeItem, clearCart }: CartProps) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = cart.length > 0 ? 12.41 : 0;
  const total = subtotal + shipping;

  return (
    <Box
      sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2, bgcolor: "#fff" }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">My Products</Typography>
        <Button color="error" onClick={clearCart}>
          Delete all
        </Button>
      </Box>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      ))}

      <Divider sx={{ my: 2 }} />

      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>Subtotal</Typography>
        <Typography>{subtotal.toFixed(2)} €</Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>Shipping</Typography>
        <Typography>
          {shipping ? shipping.toFixed(2) + " €" : "— — —"}
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        fontWeight="bold"
        mb={2}
      >
        <Typography>Total (EUR)</Typography>
        <Typography>{total.toFixed(2)} €</Typography>
      </Box>

      <Button variant="contained" color="success" fullWidth>
        Confirm order
      </Button>
    </Box>
  );
};

export default Cart;

import { type CartItemType } from "../types/ShoopingList";
import Box from "@mui/material/Box";
import { Delete } from "@mui/icons-material";
import { Remove } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

type CartItemProps = {
  item: CartItemType;
  updateQuantity: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
};

const CartItem = ({ item, updateQuantity, removeItem }: CartItemProps) => {
  const { thumbnail, title, qty, price, id } = item;
  return (
    <Box display="flex" alignItems="center" mb={2}>
      <img
        src={thumbnail}
        alt={title}
        width={60}
        height={60}
        style={{ borderRadius: 8, marginRight: 12 }}
      />
      <Box flex={1}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography color="text.secondary">{price} €</Typography>
        <Box display="flex" alignItems="center" mt={1}>
          <IconButton size="small" onClick={() => updateQuantity(id, qty - 1)}>
            <Remove />
          </IconButton>
          <Typography>{qty}</Typography>
          <IconButton size="small" onClick={() => updateQuantity(id, qty + 1)}>
            <Add />
          </IconButton>
          <IconButton size="small" color="error" onClick={() => removeItem(id)}>
            <Delete />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;

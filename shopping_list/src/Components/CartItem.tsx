import React from 'react';
import { type CartItemType } from '../types/types';
import Box from '@mui/material/Box';
import { Delete} from '@mui/icons-material';
import { Remove } from '@mui/icons-material';
import { Add } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

interface CartItemProps{
    item: CartItemType;
    updateQuantity: (id: number, qty: number) => void;
    removeItem: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({item, updateQuantity, removeItem}) => {
    return(
      <Box display="flex" alignItems="center" mb={2}>
      <img src={item.thumbnail} alt={item.title} width={60} height={60} style={{ borderRadius: 8, marginRight: 12 }} />
      <Box flex={1}>
        <Typography variant="subtitle1">{item.title}</Typography>
        <Typography color="text.secondary">{item.price} €</Typography>
        <Box display="flex" alignItems="center" mt={1}>
          <IconButton size="small" onClick={() => updateQuantity(item.id, item.qty - 1)}>
            <Remove />
          </IconButton>
          <Typography>{item.qty}</Typography>
          <IconButton size="small" onClick={() => updateQuantity(item.id, item.qty + 1)}>
            <Add />
          </IconButton>
          <IconButton size="small" color="error" onClick={() => removeItem(item.id)}>
            <Delete />
          </IconButton>
        </Box>
      </Box>
    </Box>
    )
};

export default CartItem;
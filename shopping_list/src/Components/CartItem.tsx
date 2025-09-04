import React from 'react';
import { type CartItemType } from '../types/types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';

interface CartItemProps{
    item: CartItemType;
    updateQuantity: (id: number, qty: number) => void;
    removeItem: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({item, updateQuantity, removeItem}) => {
    return(
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={item.thumbnail}
        alt={item.title}
            />
          <Typography component="div" variant="h4">
            {item.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            {item.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'right', pl: 1, pb: 1 }}>
         <Button onClick={() => updateQuantity(item.id, item.qty + 1)}>+</Button>
         <span>{item.qty}</span>
         <Button onClick={() => updateQuantity(item.id, item.qty - 1)}>-</Button>
         <IconButton aria-label="delete" onClick={() => removeItem(item.id)}></IconButton> 
        </Box>
      </Box>
    </Card>
    )
};

export default CartItem;
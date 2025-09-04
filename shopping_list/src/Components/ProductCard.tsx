import React from "react";
import { type Product } from "../types/types";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

interface CardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<CardProps> = ({ product, addToCart }) => {


  return (
 
<Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={product.thumbnail}
        alt={product.title}
            />
          <Typography component="div" variant="h5">
          {product.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
           {product.description.slice(0, 60)}...
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Typography component ="div" variant= "subtitle1">
            {product.price}
            </Typography>
            <Button variant="contained" endIcon={<AddIcon />} onClick={() => addToCart(product)}>
                Add to Cart
        </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;

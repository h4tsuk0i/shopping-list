import React from "react";
import { type Product } from "../types/types";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface CardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<CardProps> = ({ product, addToCart }) => {


  return (
 
    <Card>
      <CardMedia component="img" height="140" image={product.thumbnail} alt={product.title} />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {product.description.slice(0, 60)}...
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {product.price} €
        </Typography>
        <Button variant="contained" fullWidth sx={{ mt: 1 }} onClick={() => addToCart(product)}>
          Add to list
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

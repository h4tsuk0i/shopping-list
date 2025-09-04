import React from 'react';
import ProductCard from "./ProductCard";
import {type Product} from "../types/types";
import {Grid} from '@mui/material';

interface ProductListProps{
    products: Product[];
    addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({products, addToCart}) => {
    return(
    <Grid container spacing={2}>
         {products.map((product) => (
          <Grid>
            <ProductCard product={product} addToCart={addToCart} />
          </Grid>
         ))}
      </Grid>
    );
};

export default ProductList;
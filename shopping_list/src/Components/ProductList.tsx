import React from 'react';
import ProductCard from "./ProductCard";
import {type Product} from "../types/types";
import { Box } from '@mui/material';

interface ProductListProps{
    products: Product[];
    addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({products, addToCart}) => {
    return(
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            {products.map((product) => (
                <ProductCard
                 key={product.id}
                 product={product}
                 addToCart={addToCart}
                 />
            ))}
        </Box>
    );
};

export default ProductList;
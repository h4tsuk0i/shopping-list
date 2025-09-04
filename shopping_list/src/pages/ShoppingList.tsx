import React, {useEffect, useState} from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import { Box } from "@mui/material";
import {Typography} from "@mui/material";
import { type Product, type CartItemType } from "../types/types";

const ShoppingList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartItemType[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.products.slice(0,12)));
    },[]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) => 
                    item.id === product.id ? { ...item, qty: item.qty +1} : item
                );
            }
            return [...prev, { ...product, qty: 1}];
        })
    }

    const updateQuantity = (id: number, qty: number) => {
        setCart((prev) =>
        prev.map((item) => 
            item.id === id ? { ...item, qty: Math.max(1,qty) } : item    
            )
        );
    };

    const removeItem = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => setCart([]);

    return (
        <Box>
            <Box>
                <Typography component="div" variant="h2">
                    New Products
                </Typography>
                <ProductList products={products} addToCart={addToCart} />
            </Box>
            <Box>
               <Cart
                    cart={cart}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                    clearCart={clearCart}
                /> 
           </Box>
        </Box>
    );
};

export default ShoppingList;
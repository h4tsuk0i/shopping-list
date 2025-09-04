import React, {useEffect, useState} from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import {Typography} from "@mui/material";
import { type Product, type CartItemType } from "../types/types";
import { Container, Grid, Box } from "@mui/material";



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
        <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Left Panel */}
          <Grid size={{ xs: 12, md: 8 }} >
  
            <Typography variant="h5" gutterBottom>
              New products
            </Typography>
              <Box display="flex" justifyContent="center" mt={4}>
              </Box>
              <ProductList products={products} addToCart={addToCart} />
          </Grid>
  
          {/* Right Panel */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              clearCart={clearCart}
            />
          </Grid>
        </Grid>
      </Container>
    );
};

export default ShoppingList;
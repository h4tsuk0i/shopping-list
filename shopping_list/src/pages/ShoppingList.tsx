import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import { Typography } from "@mui/material";
import {
  type Product,
  type CartItemType,
  type ProductsResponse,
} from "../types/ShoopingList";
import { Container, Grid, Box, TextField } from "@mui/material";

const ShoppingList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    try {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
    } catch (error) {
      console.error("Error fetching products", error);
    }
  }, []);

  /**
   * function to fetch products depening on search query
   *
   * @param query search query
   */
  const fetchProducts = async (query?: string) => {
    try {
      const url = query
        ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
        : "https://dummyjson.com/products?limit=0";
      const res = await fetch(url);
      const data: ProductsResponse = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  /**
   * function to add product to cart
   *
   * @param product the product
   */
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  /**
   * Quantity manipulation of product in cart
   *
   * @param id id of product
   * @param qty quantity of product
   */
  const updateQuantity = (id: number, qty: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  /**
   * remove item from cart
   *
   * @param id id of product
   */
  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  /**
   * clear the cart
   *
   */
  const clearCart = () => setCart([]);

  /**
   * handle the search for products
   *
   * @param e event
   */
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim().length > 0) {
      fetchProducts(value);
    } else {
      fetchProducts();
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" m={3}>
        My Shopping List
      </Typography>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box display="flex" gap={2} mb={2}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
            />
          </Box>
          <Typography variant="h5" gutterBottom>
            New products
          </Typography>
          <Box display="flex" justifyContent="center" mt={4}></Box>
          <ProductList products={products} addToCart={addToCart} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ position: "sticky", top: 16 }}>
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              clearCart={clearCart}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingList;

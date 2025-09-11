import React from "react";
import ProductCard from "./ProductCard";
import { type Product } from "../types/ShoopingList";
import { Grid } from "@mui/material";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";

type ProductListProps = {
  products: Product[];
  addToCart: (product: Product) => void;
};

const ITEMS_PER_PAGE = 6;

const ProductList = ({ products, addToCart }: ProductListProps) => {
  const [page, setPage] = useState<number>(1);
  const pageCount = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {currentProducts.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6 }}>
            <ProductCard product={product} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>

      {pageCount > 1 && (
        <Box
          position="sticky"
          bottom={0}
          bgcolor="white"
          display="flex"
          justifyContent="center"
          py={2}
        >
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default ProductList;

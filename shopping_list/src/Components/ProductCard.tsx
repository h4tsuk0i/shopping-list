import { type Product } from "../types/ShoopingList";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type CardProps = {
  product: Product;
  addToCart: (product: Product) => void;
};

const ProductCard = ({ product, addToCart }: CardProps) => {
  const { title, description, thumbnail, price } = product;

  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        height="80"
        image={thumbnail}
        alt={title}
        sx={{ objectFit: "contain", bgcolor: "#fafafa" }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          p: 1,
          "&:last-child": { pb: 1 },
        }}
      >
        <Typography
          variant="body1"
          fontWeight="bold"
          noWrap
          sx={{ fontSize: "0.9rem" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {price} €
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: "auto", fontSize: "0.75rem", py: 0.5 }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

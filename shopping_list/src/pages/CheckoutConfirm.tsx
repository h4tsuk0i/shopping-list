import { Box, Typography, Button } from "@mui/material";

const CheckoutConfirm = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box margin="0.5rem">
        <Typography variant="h5">Thank you for your Purchase!</Typography>
      </Box>
      <Box maxWidth="25vh" maxHeight="10vh">
        <Button href="/" variant="contained" color="success">
          Return to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutConfirm;

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



export function Cart(){


    return(
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            My Products
          </Typography>
          </Grid>
        </Box>
    );
}
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Search(){
    return (
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            <TextField id="outlined-search" label="Search field" type="search" />
            <Button variant="outlined">Add Product</Button>
      </Box>
    );
}
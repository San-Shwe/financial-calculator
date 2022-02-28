import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

export default function MajorSection() {
    return (
        <Stack spacing={2} sx={{ width: 300, maxWidth: '100%',}}>
            {/* <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
             */}
            
            <TextField id="outlined-basic" fullWidth size="small"  label="Product Name" variant="outlined" />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                size="small" 
                options={Structures}
                renderInput={(params) => <TextField {...params} label="Structure" />}
            />
            <TextField id="standard-basic" size="small"  label="Product Size" variant="outlined" />
            {/* </Box> */}
        </Stack>
    )
}

const Structures = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ];

import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const MajorSection = ({porductName, setProductName, structure, setStructure, productSize, setProductSize}) => {
    const porductNameHandler = (e) => {
        setProductName(e.target.value);
    }

    const structureHandler = (event, value) => {
        setStructure(value);
    }

    const productSizeHandler = (e) => {
        setProductSize(e.target.value);
    }

    return (
        <Stack spacing={2} sx={{ maxWidth: '100%', width: '100%'}}>            
            <TextField placeholder={porductName} onChange={porductNameHandler} id="outlined-basic" fullWidth size="small"  label="Product Name" variant="outlined" />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                size="small"
                onChange={structureHandler}
                options={Structures}
                renderInput={(params) => <TextField {...params} label="Structure" />}
            />
            <TextField onChange={productSizeHandler} id="standard-basic" size="small" label="Product Size" variant="outlined" />
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

  export default MajorSection;
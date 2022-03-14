import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const MajorSection = ({productName, setProductName, structure, setStructure, productSize, setProductSize}) => {
    // const MyContext = React.createContext("Hello React");
    

    const productNameHandler = (e) => {
        setProductName(e.target.value);
    }

    const structureHandler = (event, value) => {
        setStructure(value.id - 1);
    }

    const productSizeHandler = (e) => {
        setProductSize(e.target.value);
    }
 
    // const name = React.useContext(MyContext)
    return (
        // <MyContext.Consumer>
            <Stack spacing={1}>   
                <TextField value={productName} onChange={productNameHandler} id="outlined-basic" size="small"  label="Product Name" variant="outlined" />
                <Autocomplete
                    id="combo-box-demo"
                    size="small"
                    value={Structures[structure]}
                    onChange={structureHandler}
                    options={Structures}
                    renderInput={(params) => <TextField {...params} label="Structure" />}
                />
                <TextField value={productSize} onChange={productSizeHandler} id="standard-basic" size="small" label="Product Size" variant="outlined" />
            </Stack>
        // {/* </MyContext.Consumer> */}
        
    )  
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Structures = [
    { id:1, label: 'The Shawshank Redemption', year: 1994 },
    { id:2, label: 'The Godfather', year: 1972 },
    { id:3, label: 'The Godfather: Part II', year: 1974 },
    { id:4, label: 'The Dark Knight', year: 2008 },
    { id:5, label: '12 Angry Men', year: 1957 },
    { id:6, label: "Schindler's List", year: 1993 },
    { id:7, label: 'Pulp Fiction', year: 1994 },
  ];

  export default MajorSection;
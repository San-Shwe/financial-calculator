import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// IMPORT COMPONENT FROM SECTIONS
import {NavBar, NavItem} from './Layout/navigation'
import TopBanner from './sections/topBanner'
import MajorSection from './sections/major_section';
import CenteredTabs from './sections/roll_or_bag'
import Raws from './sections/raw'
import OtherMaterials from './sections/other_material'
import DirectIndirectCost from './sections/directIndirect_cost'
import FinalResult from './sections/final_Result'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const App = () => {
    // for major section 
    const [porductName, setProductName] = React.useState("");
    const [structure, setStructure] = React.useState([]);
    const [productSize, setProductSize] = React.useState("");
    
    // const [inkName, setInkName] = React.useState("");
    // const [inkPrice, setInkPrice] = React.useState("");
    // const [inkQty, setInkQty] = React.useState("");

    // for raw section 
    const [newInkRow, setInkNewRow] = useState([]);
    const [newGlueRow, setGlueNewRow] = useState([]);
    const [newThinnerRow, setThinnerNewRow] = useState([]);
    const [newFilmRow, setFilmNewRow] = useState([]);

    const [newFilm, setNewFilm] = useState(([
        { id: 1, name: 'The Dark Knight', price: 0.99 },
        ]));

    return (
        <React.Fragment>
            <CssBaseline />
                <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Item><TopBanner /></Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}> 
                            <Item><MajorSection porductName={porductName} setProductName={setProductName} 
                            structure={structure} setStructure={setStructure} 
                            productSize={productSize} setProductSize={setProductSize} 
                            /></Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={8}>
                            <Item><CenteredTabs /></Item>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Item>
                                <Raws newInkRow={newInkRow} setInkNewRow={setInkNewRow}
                                newFilm={newFilm} setNewFilm={setNewFilm}
                                newGlueRow={newGlueRow} setGlueNewRow={setGlueNewRow}
                                newThinnerRow={newThinnerRow} setThinnerNewRow={setThinnerNewRow}
                                newFilmRow={newFilmRow} setFilmNewRow={setFilmNewRow}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Item><OtherMaterials /></Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item><DirectIndirectCost /></Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item><FinalResult /></Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <NavBar>
                <NavItem icon="😊" />
                <NavItem icon="😊" />
                <NavItem icon="😊" />
            </NavBar>
        </React.Fragment>
    )
}
  
export default App;

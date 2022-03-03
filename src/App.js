import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

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
  
const App = props => {
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
                            <Item><MajorSection /></Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={8}>
                            <Item><CenteredTabs /></Item>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Item>
                                <Raws /> 
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
                {/* <NavItem icon="Calculate" /> */}
                <NavItem icon="😊" />
                <NavItem icon="😊" />
                <NavItem icon="😊" />
            </NavBar>
        </React.Fragment>
    )
}
  
export default App;

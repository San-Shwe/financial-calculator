import React, {createRef, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import MajorSection from './sections/major_section';
import CenteredTabs from './sections/roll_or_bag'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
class MainContainer extends React.Component {
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    {/* <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }}>
                        <Toolbar>
                            <h2>Hello React</h2>
                        </Toolbar>
                    </Box> */}
                    {this.props.children}
                </Container>
            </React.Fragment>
        )
    }
}
class TopBanner extends React.Component {
    render(){
        return (
            <div>
                <Box sx={{ bgcolor: '#cfe8fc', height: '10vh', lineHeight: '100%' }}>
                    <h4 color='primary'>Myit Shwe Wah</h4>
                </Box>
            </div>
        );
    }
}

class Toolbar extends React.Component {
    render() {
        return (
            <div style={{ background: 'cyan', padding: 10 }}>
            {this.props.children}
            </div>
        );
    }
}

const App = props => {
    return (
        <div>
            <MainContainer>
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
                        <Grid item xs={6} md={8}>
                            <Item>xs=6 md=8</Item>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Item>xs=6 md=4</Item>
                        </Grid>
                    </Grid>
                </Box>
            </MainContainer>
        </div>
    )
}
export default App;

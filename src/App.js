import React, {createRef, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

class SimpleContainer extends React.Component {
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Banner />
                    <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }}>
                        <Toolbar>
                            <h2>Hello React</h2>
                        </Toolbar>
                    </Box>
                </Container>
            </React.Fragment>
        )
    }
}
class Banner extends React.Component {
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm" align="center">
                <Box sx={{ bgcolor: '#cfe8fc', height: '10vh' }}>
                    <h4 color='primary'>Myit Shwe Wah</h4>
                </Box>
                </Container>
            </React.Fragment>
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
            <SimpleContainer>
                <h2>SimpleContainer</h2>
            </SimpleContainer>
        </div>
    )
}
export default App;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
// import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import '@fontsource/roboto/300.css';

export default class TopBanner extends React.Component {
    render(){
        return (
            <div>
                <Box sx={{ p: 2, display: 'flex' }}>
                    <Stack spacing={0.5}>
                        <Typography variant="body2" color="text.secondary">
                        {/* <LocationOn sx={{color:'primary'}} /> Scranton, PA */}
                        </Typography>
                    </Stack>
                    <Button>
                        <img alt="Remy Sharp" height ={39} width={170} src='https://www.myitshwewah.com/uploads/6/0/3/6/60366863/full-logo-horizontal_2.png' />
                    </Button>
                </Box>
                {/* <Divider />
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
                >
                    <Chip>Active account</Chip>
                    <Switch />
                </Stack> */}
            </div>
        );
    }
}


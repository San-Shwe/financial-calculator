import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Stack from '@mui/material/Stack'
import "@fontsource/roboto/300.css";
import msw_logo from "../img/msw-transparent-logo.png";
import Grid from "@mui/material/Grid";

import "../App.css";

export default class TopBanner extends React.Component {
  render() {
    return (
      <div>
        <Box sx={{ width: "100%", backgroundColor: "transparent" }}>
          <Grid container spacing={2}>
            <Grid item md={4} sm={4} xs={12} textAlign="left">
              {/* <Button fullWidth variant="contained" sx={{background:'linear-gradient(to right, #757F9A 0%, #D7DDE8  51%, #757F9A  100%)'}}> */}
              <img alt="msw_logo" height={39} width={170} src={msw_logo} />
              {/* https://www.myitshwewah.com/uploads/6/0/3/6/60366863/full-logo-horizontal_2.png */}
              {/* </Button> */}
            </Grid>
            <Grid item md={8} ms={8} xs={12} textAlign="left">
              <Typography className="title" sx={{ marginLeft: 0 }} variant="h5">
                FINANCIAL CALCULATOR
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

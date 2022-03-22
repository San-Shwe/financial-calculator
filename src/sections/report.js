import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import msw_logo from "../img/msw-transparent-logo.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

// import Button from "@mui/material/Button";

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Box ref={ref} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <img alt="msw_logo" height={39} width={170} src={msw_logo} />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              Product Name : {props.productName}
              <br />
              Product Size : {props.productSize}
              <br />
              Structure : {Structures[props.structure].label}
              <br />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
});

export default function Report({ structure, productSize, productName }) {
  const componentRef = useRef();

  return (
    <div>
      <ComponentToPrint
        productName={productName}
        structure={structure}
        productSize={productSize}
        ref={componentRef}
      />
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Structures = [
  { id: 1, label: "The Shawshank Redemption", year: 1994 },
  { id: 2, label: "The Godfather", year: 1972 },
  { id: 3, label: "The Godfather: Part II", year: 1974 },
  { id: 4, label: "The Dark Knight", year: 2008 },
  { id: 5, label: "12 Angry Men", year: 1957 },
  { id: 6, label: "Schindler's List", year: 1993 },
  { id: 7, label: "Pulp Fiction", year: 1994 },
];

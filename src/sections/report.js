import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import "../css/report.css";

import {
  twoDecimalPlacesIfCents,
  numberWithCommas,
} from "../Modules/global_module.mjs";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import msw_logo from "../img/msw-transparent-logo.png";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));
// ----------------------------------------------------------------------------------------------

// function priceRow(qty, unit) {
//   return qty * unit;
// }

// function createRow(desc, qty, unit) {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price };
// }

// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// const rows = [
//   createRow("Paperclips (Box)", 100, 1.15),
//   createRow("Paper (Case)", 10, 45.99),
//   createRow("Waste Basket", 2, 17.99),
// ];

// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;
// ------------------------------------------------------------------------------
const date = new Date();

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Box ref={ref} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item className="container">
              <div className="item">
                <img alt="msw_logo" height={39} width={170} src={msw_logo} />
              </div>
              <div className="item">
                {date.toLocaleString("en-US", {
                  weekday: "short", // long, short, narrow
                  day: "numeric", // numeric, 2-digit
                  year: "numeric", // numeric, 2-digit
                  month: "long", // numeric, 2-digit, long, short, narrow
                })}
                <br />
                {date.toLocaleString("en-US", {
                  hour: "numeric", // numeric, 2-digit
                  minute: "numeric", // numeric, 2-digit
                  second: "numeric", // numeric, 2-digit
                })}
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item className="container">
              <div className="item">
                <strong>PRODUCT NAME</strong>
                {props.productName}
                <br />
                <strong>PRODUCT SIZE</strong>
                {props.productSize}
              </div>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item className="container">
              <div className="item">
                <strong>STRUCTURE</strong>
                {Structures[props.structure].label}
                <br />
                <strong>TYPE</strong>
                {props.type}
                <br />
              </div>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <TableContainer component={Paper}>
                <Table aria-label="spanning table">
                  <TableHead>
                    {/* <TableRow>
                      <TableCell align="center" colSpan={3}>
                        Details
                      </TableCell>
                      <TableCell align="right">Price</TableCell>
                    </TableRow> */}
                    <TableRow>
                      <TableCell>Desc</TableCell>
                      <TableCell align="right">Qty.</TableCell>
                      <TableCell align="right">Unit</TableCell>
                      <TableCell align="right">Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.newInkRow.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{Structures[row.name].label}</TableCell>
                        <TableCell align="right">{row.qty}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">
                          ${numberWithCommas(row.amount)}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell rowSpan={6} />
                      <TableCell colSpan={2}>RAW TOTAL : </TableCell>
                      <TableCell align="right">0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>OTHER MATERIALS : </TableCell>
                      <TableCell align="right">0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>DIRECT COST : </TableCell>
                      <TableCell align="right">0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>INDIRECT COST : </TableCell>
                      <TableCell align="right">{props.inDirectCost}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Tax</TableCell>
                      <TableCell align="right">0%</TableCell>
                      <TableCell align="right">0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Total</TableCell>
                      <TableCell align="right">0</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
});

export default function Report({
  structure,
  productSize,
  productName,
  meterPerRoll,
  rollUp,
  rollMeter,
  type,
  rollQty,
  meterOrPcs,
  cuttinglength,
  core3Length,
  core3Size,
  core3Price,
  core6Length,
  core6Size,
  core6Price,
  TSMeter,
  TSUp,
  TSDST,
  TSRoll,
  TSPrice,
  PVCGlueMeter,
  PVCGlueUp,
  PVCGlueQty,
  PVCGluePrice,
  PETGGlueMeter,
  PETGGlueUp,
  PETGGlueQty,
  PETGGluePrice,
  SSDSTMeter,
  SSDSTUp,
  SSDSTDST,
  SSDSTRoll,
  SSDSTPrice,
  LHPcs,
  LHPrice,
  CBPcs,
  CBPrice,
  SSRibbonMeter,
  SSRibbonUp,
  SSRibbonDST,
  SSRibbonRoll,
  SSRibbonPrice,
  ZipperMeter,
  ZipperUp,
  ZipperDST,
  ZipperRoll,
  ZipperPrice,
  bagUp,
  bagQty,
  isMeter,
  newInkRow,
  newGlueRow,
  newThinnerRow,
  newFilmRow,
  newResinRow,
  core3Amount,
  core6Amount,
  TSAmount,
  PVCGlueAmount,
  PETGGlueAmount,
  SSDSTAmount,
  LHAmount,
  CBAmount,
  SSRibbonAmount,
  ZipperAmount,
  directCost,
  inDirectCost,
  rawTotal,
  OtherMaterialsTotal,
  total,
  subTotal,
  grandTotal,
  wastagePercentValue,
  promotionPercentValue,
}) {
  const componentRef = useRef();

  return (
    <div>
      <ComponentToPrint
        productName={productName}
        structure={structure}
        productSize={productSize}
        meterPerRoll={meterPerRoll}
        rollUp={rollUp}
        rollMeter={rollMeter}
        type={type}
        rollQty={rollQty}
        meterOrPcs={meterOrPcs}
        cuttinglength={cuttinglength}
        core3Length={core3Length}
        core3Size={core3Size}
        core3Price={core3Price}
        core6Length={core6Length}
        core6Size={core6Size}
        core6Price={core6Price}
        TSMeter={TSMeter}
        TSUp={TSUp}
        TSDST={TSDST}
        TSRoll={TSRoll}
        TSPrice={TSPrice}
        PVCGlueMeter={PVCGlueMeter}
        PVCGlueUp={PVCGlueUp}
        PVCGlueQty={PVCGlueQty}
        PVCGluePrice={PVCGluePrice}
        PETGGlueMeter={PETGGlueMeter}
        PETGGlueUp={PETGGlueUp}
        PETGGlueQty={PETGGlueQty}
        PETGGluePrice={PETGGluePrice}
        SSDSTMeter={SSDSTMeter}
        SSDSTUp={SSDSTUp}
        SSDSTDST={SSDSTDST}
        SSDSTRoll={SSDSTRoll}
        SSDSTPrice={SSDSTPrice}
        LHPcs={LHPcs}
        LHPrice={LHPrice}
        CBPcs={CBPcs}
        CBPrice={CBPrice}
        SSRibbonMeter={SSRibbonMeter}
        SSRibbonUp={SSRibbonUp}
        SSRibbonDST={SSRibbonDST}
        SSRibbonRoll={SSRibbonRoll}
        SSRibbonPrice={SSRibbonPrice}
        ZipperMeter={ZipperMeter}
        ZipperUp={ZipperUp}
        ZipperDST={ZipperDST}
        ZipperRoll={ZipperRoll}
        ZipperPrice={ZipperPrice}
        bagUp={bagUp}
        bagQty={bagQty}
        isMeter={isMeter}
        newInkRow={newInkRow}
        newGlueRow={newGlueRow}
        newThinnerRow={newThinnerRow}
        newFilmRow={newFilmRow}
        newResinRow={newResinRow}
        core3Amount={core3Amount}
        core6Amount={core6Amount}
        TSAmount={TSAmount}
        PVCGlueAmount={PVCGlueAmount}
        PETGGlueAmount={PETGGlueAmount}
        SSDSTAmount={SSDSTAmount}
        LHAmount={LHAmount}
        CBAmount={CBAmount}
        SSRibbonAmount={SSRibbonAmount}
        ZipperAmount={ZipperAmount}
        directCost={directCost}
        inDirectCost={inDirectCost}
        rawTotal={rawTotal}
        OtherMaterialsTotal={OtherMaterialsTotal}
        total={total}
        subTotal={subTotal}
        grandTotal={grandTotal}
        wastagePercentValue={wastagePercentValue}
        promotionPercentValue={promotionPercentValue}
        ref={componentRef}
      />
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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

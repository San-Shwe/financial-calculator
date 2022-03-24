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

import { createTheme, ThemeProvider } from "@mui/material/styles"; //,

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === "dark" ? "transparent" : "rgba(0, 0, 0, 0.04)", //rgba(255, 255, 255, 0.7)
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));
const date = new Date();

const BindRaws = ({ raws }) => {
  return raws.map((row) => (
    <TableRow key={row.id}>
      <TableCell>{Structures[row.name - 1].label}</TableCell>
      <TableCell align="right">{row.qty}</TableCell>
      <TableCell align="right">{row.price}</TableCell>
      <TableCell align="right">${numberWithCommas(row.amount)}</TableCell>
    </TableRow>
  ));
};

const BindOtherMaterials = ({ name, qty, price, amount }) => {
  const showOrHide = amount !== 0 ? "table-row" : "none";
  return (
    <TableRow style={{ display: showOrHide }}>
      <TableCell>{name}</TableCell>
      <TableCell align="right">{Number(qty)}</TableCell>
      <TableCell align="right">{Number(price)}</TableCell>
      <TableCell align="right">${numberWithCommas(amount)}</TableCell>
    </TableRow>
  );
};

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Box ref={ref} sx={{ flexGrow: 1, backgroundColor: "#fff" }}>
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
                <div>
                  <strong>PRODUCT NAME</strong>
                  <p>{props.productName}</p>
                </div>
              </div>
              <div className="item">
                <div>
                  <strong>PRODUCT SIZE</strong>
                  <p>{props.productSize}</p>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item className="container">
              <div className="item">
                <div>
                  <strong>STRUCTURE</strong>
                  <p>{Structures[props.structure].label}</p>
                </div>
              </div>
              <div className="item">
                <div>
                  <strong>TYPE</strong>
                  <p>{props.type}</p>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid
            style={{ display: props.rollQty !== 0 ? "inline" : "none" }}
            item
            xs={12}
          >
            <Item className="container">
              <div className="item">
                <div>
                  <b>Up</b>
                  <p>{props.rollUp}</p>
                </div>
              </div>
              <div className="item">
                <div>
                  <b>Meter</b>
                  <p>{props.rollMeter}</p>
                </div>
              </div>
              <div className="item">
                <div>
                  <b>M/R</b>
                  <p>{props.meterPerRoll}</p>
                </div>
              </div>
              <div className="item">
                <div>
                  <b>Roll Qty</b>
                  <p>{props.rollQty}</p>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid
            style={{ display: props.rollQty !== 0 ? "none" : "inline" }}
            item
            xs={12}
          >
            <Item className="container">
              <div className="item">
                <div>
                  <b>{props.isMeter === true ? "Meter" : "Pcs"}</b>
                  <p>{props.meterOrPcs}</p>
                </div>
              </div>
              <div className="item">
                <div>
                  <b>Cutting Length</b>
                  <p>{props.cuttinglength}</p>
                </div>
              </div>
              <div className="item">
                <div>
                  <b>Up</b>
                  <p>{props.bagUp}</p>
                </div>
              </div>
              <div className="item">
                <div>
                  <b>{props.isMeter === true ? "Pcs" : "Meter"}</b>
                  <p>{props.bagQty}</p>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
                    >
                      <TableCell>Desc</TableCell>
                      <TableCell align="right">Qty.</TableCell>
                      <TableCell align="right">Unit</TableCell>
                      <TableCell align="right">Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <BindRaws raws={props.newInkRow} />
                    <BindRaws raws={props.newGlueRow} />
                    <BindRaws raws={props.newResinRow} />
                    <BindRaws raws={props.newThinnerRow} />
                    <BindRaws raws={props.newFilmRow} />

                    <BindOtherMaterials
                      name="Paper Core 3''"
                      qty={props.core3Length}
                      price={props.core3Price}
                      amount={props.core3Amount}
                    />
                    <BindOtherMaterials
                      name="Paper Core 6''"
                      qty={props.core6Length}
                      price={props.core6Price}
                      amount={props.core6Amount}
                    />
                    <BindOtherMaterials
                      name="T.S ( double Side Tape)"
                      qty={props.TSMeter}
                      price={props.TSPrice}
                      amount={props.TSAmount}
                    />
                    <BindOtherMaterials
                      name="PVC Glue"
                      qty={props.PVCGlueQty}
                      price={props.PVCGluePrice}
                      amount={props.PVCGlueAmount}
                    />
                    <BindOtherMaterials
                      name="PETG Glue"
                      qty={props.PETGGlueQty}
                      price={props.PETGGluePrice}
                      amount={props.PETGGlueAmount}
                    />
                    <BindOtherMaterials
                      name="Double Side Tape"
                      qty={props.SSDSTRoll}
                      price={props.SSDSTPrice}
                      amount={props.SSDSTAmount}
                    />
                    <BindOtherMaterials
                      name="Loop Handle"
                      qty={props.LHPcs}
                      price={props.LHPrice}
                      amount={props.LHAmount}
                    />
                    <BindOtherMaterials
                      name="Card Board"
                      qty={props.CBPcs}
                      price={props.CBPrice}
                      amount={props.CBAmount}
                    />
                    <BindOtherMaterials
                      name="Ribbon"
                      qty={props.SSRibbonRoll}
                      price={props.SSRibbonPrice}
                      amount={props.SSRibbonAmount}
                    />
                    <BindOtherMaterials
                      name="4.S.S Zipper"
                      qty={props.ZipperRoll}
                      price={props.ZipperPrice}
                      amount={props.ZipperAmount}
                    />

                    <TableRow>
                      <TableCell rowSpan={10} />
                      <TableCell colSpan={2}>RAW TOTAL : </TableCell>
                      <TableCell align="right">{props.rawTotal}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>OTHER MATERIALS : </TableCell>
                      <TableCell align="right">
                        {props.OtherMaterialsTotal}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>DIRECT COST : </TableCell>
                      <TableCell align="right">{props.directCost}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>INDIRECT COST : </TableCell>
                      <TableCell align="right">{props.inDirectCost}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>Total</TableCell>
                      <TableCell align="right">{props.total}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Wastage % :</TableCell>
                      <TableCell align="right">
                        {props.wastagePercentValue}%
                      </TableCell>
                      <TableCell align="right">
                        {twoDecimalPlacesIfCents(
                          (props.wastagePercentValue * props.total) / 100
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>SubTotal : </TableCell>
                      <TableCell align="right">
                        {twoDecimalPlacesIfCents(props.subTotal + props.total)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Pormotion % :</TableCell>
                      <TableCell align="right">
                        {props.promotionPercentValue}%
                      </TableCell>
                      <TableCell align="right">
                        {twoDecimalPlacesIfCents(
                          (props.promotionPercentValue *
                            (props.subTotal + props.total)) /
                            100
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>GRAND TOTAL : </TableCell>
                      <TableCell align="right">
                        {twoDecimalPlacesIfCents(
                          props.subTotal + props.total - props.grandTotal
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>Per Unit : </TableCell>
                      <TableCell align="right">
                        {twoDecimalPlacesIfCents(
                          (props.subTotal + props.total) /
                            (props.rollQty !== 0 ? props.rollQty : props.bagQty)
                        )}
                      </TableCell>
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
      <ThemeProvider theme={lightTheme}>
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
      </ThemeProvider>
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

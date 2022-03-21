import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles"; //,
import CalculateIcon from "@mui/icons-material/CalculateRounded";
import ClearAllIcon from "@mui/icons-material/ClearAllRounded";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import SaveIcon from "@mui/icons-material/SaveRounded";
import Button from "@mui/material/Button";
import { cyan, orange } from "@mui/material/colors";
import About from "./about";
import Main from "./main";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./App.css";

// IMPORT COMPONENTS
import { NavBar, NavItem } from "./Layout/navigation";
import twoDecimalPlacesIfCents from "./Modules/global_module.mjs";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: cyan[700],
    },
    secondary: {
      main: orange[500],
    },
  },
});

const App = () => {
  // for major section
  const [productName, setProductName] = React.useState("");
  const [structure, setStructure] = React.useState(0); // actually structure is saved id not name
  const [productSize, setProductSize] = React.useState("");

  // for roll or bag section
  // For Roll Form
  const [meterPerRoll, setMeterPerRoll] = React.useState("");
  const [rollUp, setRollUp] = React.useState("");
  const [rollMeter, setRollMeter] = React.useState("");
  const [rollQty, setRollQty] = React.useState(0);

  // For Bag Form
  const [meterOrPcs, setMeterOrPcs] = React.useState("");
  const [cuttinglength, setCuttingLength] = React.useState("");
  const [bagUp, setBagUp] = React.useState("");
  const [bagQty, setBagQty] = useState(0);
  const [isMeter, setIsMeter] = useState(true);

  const [type, setType] = useState("Roll");

  // variables for raw section
  const [newInkRow, setInkNewRow] = useState([]);
  const [newGlueRow, setGlueNewRow] = useState([]);
  const [newThinnerRow, setThinnerNewRow] = useState([]);
  const [newFilmRow, setFilmNewRow] = useState([]);
  const [newResinRow, setResinNewRow] = useState([]);

  // variables for other materials section
  let [core3Amount, setCore3Amount] = useState(0);
  let [core6Amount, setCore6Amount] = useState(0);
  let [TSAmount, setTSAmount] = useState(0);
  let [PVCGlueAmount, setPVCGlueAmount] = useState(0);
  let [PETGGlueAmount, setPETGGlueAmount] = useState(0);
  let [SSDSTAmount, setSSDSTAmount] = useState(0);
  let [LHAmount, setLHAmount] = useState(0);
  let [CBAmount, setCBAmount] = useState(0);
  let [SSRibbonAmount, setSSRibbonAmount] = useState(0);
  let [ZipperAmount, setZipperAmount] = useState(0);

  // variables for DirectCost and IndirectCost
  let [directCost, setDirectCost] = useState(0);
  let [inDirectCost, setIndirectCost] = useState(0);

  // Final Calculation
  const [wastagePercentValue, setWastagePercentValue] = useState(0);
  const [promotionPercentValue, setPromotionPercentValue] = useState(0);

  const [rawTotal, setRawTotal] = useState(0);
  const [OtherMaterialsTotal, setOtherMaterialsTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  // Save Raw to Local
  // const saveRawsToLocal = () => {
  //     localStorage.setItem('newInkRow', JSON.stringify(newInkRow));
  //     localStorage.setItem('newGlueRow', JSON.stringify(newGlueRow));
  //     localStorage.setItem('newThinnerRow', JSON.stringify(newThinnerRow));
  //     localStorage.setItem('newFilmRow', JSON.stringify(newFilmRow));
  //     localStorage.setItem('newResinRow', JSON.stringify(newResinRow));
  // };

  const [viewSaved, setViewSaved] = useState(true);

  // Clear All data from local storage and current text box
  const clearHandler = (e) => {
    // localStorage.clear();

    setProductName("");
    setStructure([]);
    setProductSize("");
    setRollQty(0);
    setBagQty(0);
    setInkNewRow([]);
    setGlueNewRow([]);
    setThinnerNewRow([]);
    setFilmNewRow([]);
    setResinNewRow([]);
    setCore3Amount(0);
    setCore6Amount(0);
    setTSAmount(0);
    setPVCGlueAmount(0);
    setPETGGlueAmount(0);
    setSSDSTAmount(0);
    setLHAmount(0);
    setCBAmount(0);
    setSSRibbonAmount(0);
    setZipperAmount(0);
    setDirectCost(0);
    setIndirectCost(0);
    setRawTotal(0);
    setOtherMaterialsTotal(0);
    setTotal(0);
    setSubTotal(0);
    setGrandTotal(0);

    console.log("Clear ");
  };

  // Save All data to Local Storage
  const saveHandler = () => {
    const date = new Date();
    localStorage.setItem(
      "order",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("order")),
        {
          id: localStorage.getItem("order").length,
          name: productName,
          structure_id: structure,
          product_size: productSize,
          RollForm: {
            rollUp: rollUp,
            rollMeter: rollMeter,
            meterPerRoll: meterPerRoll,
            rollQty: rollQty,
          },
          BagForm: {
            meterOrPcs: meterOrPcs,
            cuttinglength: cuttinglength,
            bagUp: bagUp,
            bagQty: bagQty,
            isMeter: isMeter,
          },
          type: type,
          date: date.toLocaleString("en-US", {
            weekday: "short", // long, short, narrow
            day: "numeric", // numeric, 2-digit
            year: "numeric", // numeric, 2-digit
            month: "long", // numeric, 2-digit, long, short, narrow
            hour: "numeric", // numeric, 2-digit
            minute: "numeric", // numeric, 2-digit
            second: "numeric", // numeric, 2-digit
          }),
          raws: {
            ink: newInkRow,
            glue: newGlueRow,
            resin: newResinRow,
            thinner: newThinnerRow,
            film: newFilmRow,
          },
          otherMaterials: {
            RollForm: {
              core3Amount: core3Amount,
              core6Amount: core6Amount,
            },
            TSDST: {
              TSAmount: TSAmount,
            },
            TCS: {
              PVCGlueAmount: PVCGlueAmount,
              PETGGlueAmount: PETGGlueAmount,
            },
            SS: {
              SSDSTAmount: SSDSTAmount,
              LHAmount: LHAmount,
              CBAmount: CBAmount,
              SSRibbonAmount: SSRibbonAmount,
            },
            FourSSZipper: {
              ZipperAmount: ZipperAmount,
            },
          },
          directCost: directCost,
          inDirectCost: inDirectCost,

          wastagePercentValue: wastagePercentValue,
          promotionPercentValue: promotionPercentValue,
          rawTotal: rawTotal,
          OtherMaterialsTotal: OtherMaterialsTotal,
          total: total,
          subTotal: subTotal,
          grandTotal: grandTotal,
        },
      ])
    );

    localStorage.setItem("productName", JSON.stringify(productName));
    localStorage.setItem("structure", JSON.stringify(structure));
    localStorage.setItem("productSize", JSON.stringify(productSize));

    localStorage.setItem("meterPerRoll", JSON.stringify(meterPerRoll));
    localStorage.setItem("rollUp", JSON.stringify(rollUp));
    localStorage.setItem("rollMeter", JSON.stringify(rollMeter));
    localStorage.setItem("rollQty", JSON.stringify(rollQty));

    localStorage.setItem("meterOrPcs", JSON.stringify(meterOrPcs));
    localStorage.setItem("cuttinglength", JSON.stringify(cuttinglength));
    localStorage.setItem("bagUp", JSON.stringify(bagUp));
    localStorage.setItem("bagQty", JSON.stringify(bagQty));

    localStorage.setItem("isMeter", JSON.stringify(isMeter));
    localStorage.setItem("type", JSON.stringify(type));

    // save Raws To Local(); // save to local
    localStorage.setItem("newInkRow", JSON.stringify(newInkRow));
    localStorage.setItem("newGlueRow", JSON.stringify(newGlueRow));
    localStorage.setItem("newThinnerRow", JSON.stringify(newThinnerRow));
    localStorage.setItem("newFilmRow", JSON.stringify(newFilmRow));
    localStorage.setItem("newResinRow", JSON.stringify(newResinRow));

    // save Other Materials to Local();
    localStorage.setItem("core3Amount", JSON.stringify(core3Amount));
    localStorage.setItem("core6Amount", JSON.stringify(core6Amount));
    localStorage.setItem("TSAmount", JSON.stringify(TSAmount));
    localStorage.setItem("PVCGlueAmount", JSON.stringify(PVCGlueAmount));
    localStorage.setItem("PETGGlueAmount", JSON.stringify(PETGGlueAmount));
    localStorage.setItem("SSDSTAmount", JSON.stringify(SSDSTAmount));
    localStorage.setItem("LHAmount", JSON.stringify(LHAmount));
    localStorage.setItem("CBAmount", JSON.stringify(PETGGlueAmount));
    localStorage.setItem("SSRibbonAmount", JSON.stringify(SSRibbonAmount));
    localStorage.setItem("ZipperAmount", JSON.stringify(ZipperAmount));

    // save Direct Cost and Incirect Cost to Local
    localStorage.setItem("directCost", JSON.stringify(directCost));
    localStorage.setItem("inDirectCost", JSON.stringify(inDirectCost));

    // Save Final Calculation
    localStorage.setItem(
      "wastagePercentValue",
      JSON.stringify(wastagePercentValue)
    );
    localStorage.setItem(
      "promotionPercentValue",
      JSON.stringify(promotionPercentValue)
    );

    // const [rawTotal, setRawTotal] = useState(0);
    // const [OtherMaterialsTotal, setOtherMaterialsTotal] = useState(0);
    // const [total, setTotal] = useState(0);
    // const [subTotal , setSubTotal] = useState(0);
    // const [grandTotal , setGrandTotal] = useState(0);
  };

  // Run Once when app start
  useEffect(() => {
    if (localStorage.getItem("order") == null) {
      localStorage.setItem("order", JSON.stringify([]));
    }

    // bind productName
    if (localStorage.getItem("productName") === null) {
      localStorage.setItem("productName", JSON.stringify(""));
    } else {
      setProductName(JSON.parse(localStorage.getItem("productName")));
    }

    // bind Structure
    if (localStorage.getItem("structure") === null) {
      localStorage.setItem("structure", 0);
    } else {
      setStructure(JSON.parse(localStorage.getItem("structure")));
    }

    // bind productSize
    if (localStorage.getItem("productSize") === null) {
      localStorage.setItem("productSize", JSON.stringify(""));
    } else {
      setProductSize(JSON.parse(localStorage.getItem("productSize")));
    }

    // bind >> roll from
    // bind data for roll form
    if (localStorage.getItem("meterPerRoll") === null) {
      localStorage.setItem("meterPerRoll", JSON.stringify(""));
    } else {
      setMeterPerRoll(JSON.parse(localStorage.getItem("meterPerRoll")));
    }
    if (localStorage.getItem("rollUp") === null) {
      localStorage.setItem("rollUp", JSON.stringify(""));
    } else {
      setRollUp(JSON.parse(localStorage.getItem("rollUp")));
    }
    if (localStorage.getItem("rollMeter") === null) {
      localStorage.setItem("rollMeter", JSON.stringify(""));
    } else {
      setRollMeter(JSON.parse(localStorage.getItem("rollMeter")));
    }
    if (localStorage.getItem("rollQty") === null) {
      localStorage.setItem("rollQty", JSON.stringify(""));
    } else {
      setRollQty(JSON.parse(localStorage.getItem("rollQty")));
    }
    // bind data for bag form
    if (localStorage.getItem("meterOrPcs") === null) {
      localStorage.setItem("meterOrPcs", JSON.stringify(0));
    } else {
      setMeterOrPcs(JSON.parse(localStorage.getItem("meterOrPcs")));
    }
    if (localStorage.getItem("cuttinglength") === null) {
      localStorage.setItem("cuttinglength", JSON.stringify(""));
    } else {
      setCuttingLength(JSON.parse(localStorage.getItem("cuttinglength")));
    }
    if (localStorage.getItem("bagUp") === null) {
      localStorage.setItem("bagUp", JSON.stringify(""));
    } else {
      setBagUp(JSON.parse(localStorage.getItem("bagUp")));
    }
    if (localStorage.getItem("bagQty") === null) {
      localStorage.setItem("bagQty", JSON.stringify(""));
    } else {
      setBagQty(JSON.parse(localStorage.getItem("bagQty")));
    }
    if (localStorage.getItem("isMeter") === null) {
      // is meter or pcs
      localStorage.setItem("isMeter", JSON.stringify(true));
    } else {
      setIsMeter(JSON.parse(localStorage.getItem("isMeter")));
    }

    // bind data for Raw
    if (localStorage.getItem("newInkRow") === null) {
      localStorage.setItem("newInkRow", JSON.stringify([]));
    } else {
      setInkNewRow(JSON.parse(localStorage.getItem("newInkRow")));
    }

    if (localStorage.getItem("newGlueRow") === null) {
      localStorage.setItem("newGlueRow", JSON.stringify([]));
    } else {
      setGlueNewRow(JSON.parse(localStorage.getItem("newGlueRow")));
    }

    if (localStorage.getItem("newThinnerRow") === null) {
      localStorage.setItem("newThinnerRow", JSON.stringify([]));
    } else {
      setThinnerNewRow(JSON.parse(localStorage.getItem("newThinnerRow")));
    }

    if (localStorage.getItem("newResinRow") === null) {
      localStorage.setItem("newResinRow", JSON.stringify([]));
    } else {
      setResinNewRow(JSON.parse(localStorage.getItem("newResinRow")));
    }

    if (localStorage.getItem("newFilmRow") === null) {
      localStorage.setItem("newFilmRow", JSON.stringify([]));
    } else {
      setFilmNewRow(JSON.parse(localStorage.getItem("newFilmRow")));
    }

    // bind data for Other Materials
    // core3Amount={core3Amount} setCore3Amount={setCore3Amount}
    // core6Amount={core6Amount} setCore6Amount={setCore6Amount}
    // TSAmount={TSAmount} setTSAmount={setTSAmount}
    // PVCGlueAmount={PVCGlueAmount} setPVCGlueAmount={setPVCGlueAmount}
    // PETGGlueAmount={PETGGlueAmount} setPETGGlueAmount={setPETGGlueAmount}
    // SSDSTAmount={SSDSTAmount} setSSDSTAmount={setSSDSTAmount}
    // LHAmount={LHAmount} setLHAmount={setLHAmount}
    // CBAmount={CBAmount} setCBAmount={setCBAmount}
    // SSRibbonAmount={SSRibbonAmount} setSSRibbonAmount={setSSRibbonAmount}
    // ZipperAmount={ZipperAmount} setZipperAmount={setZipperAmount}

    // bind data for DirectCost Indirect Cost
    if (localStorage.getItem("directCost") === null) {
      localStorage.setItem("directCost", JSON.stringify(0));
    } else {
      setDirectCost(JSON.parse(localStorage.getItem("directCost")));
    }
    if (localStorage.getItem("inDirectCost") === null) {
      localStorage.setItem("inDirectCost", JSON.stringify(0));
    } else {
      setIndirectCost(JSON.parse(localStorage.getItem("inDirectCost")));
    }

    // bind data for Fial Calculation
    if (localStorage.getItem("wastagePercentValue") === null) {
      localStorage.setItem("wastagePercentValue", JSON.stringify(0));
    } else {
      setWastagePercentValue(
        JSON.parse(localStorage.getItem("wastagePercentValue"))
      );
    }
    if (localStorage.getItem("promotionPercentValue") === null) {
      localStorage.setItem("promotionPercentValue", JSON.stringify(0));
    } else {
      setPromotionPercentValue(
        JSON.parse(localStorage.getItem("promotionPercentValue"))
      );
    }
  }, []);

  // Use Effects For Sum of Raw
  useEffect(() => {
    let total = 0;
    newInkRow.forEach((element) => {
      total += Number(element.amount);
    });

    newGlueRow.forEach((element) => {
      total += Number(element.amount);
    });

    newThinnerRow.forEach((element) => {
      total += Number(element.amount);
    });

    newFilmRow.forEach((element) => {
      total += Number(element.amount);
    });

    newResinRow.forEach((element) => {
      total += Number(element.amount);
    });

    setRawTotal(twoDecimalPlacesIfCents(total));
  }, [newInkRow, newGlueRow, newThinnerRow, newFilmRow, newResinRow]);

  // useEffect hook for sum of other materials
  useEffect(() => {
    let total =
      Number(core3Amount) +
      Number(core6Amount) +
      Number(TSAmount) +
      Number(PVCGlueAmount) +
      Number(PETGGlueAmount) +
      Number(SSDSTAmount) +
      Number(LHAmount) +
      Number(CBAmount) +
      Number(SSRibbonAmount) +
      Number(ZipperAmount);
    setOtherMaterialsTotal(twoDecimalPlacesIfCents(total)); // convert to 2 decimal and set to total
    setTotal(
      Number(rawTotal) +
        Number(OtherMaterialsTotal) +
        Number(directCost) +
        Number(inDirectCost)
    );
  }, [
    newInkRow,
    newGlueRow,
    newThinnerRow,
    newFilmRow,
    newResinRow,
    rawTotal,
    OtherMaterialsTotal,
    subTotal,
    grandTotal,
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
  ]);

  // const MyContext = React.createContext();

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <React.Fragment>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Main
                  structure={structure}
                  setStructure={setStructure}
                  productSize={productSize}
                  setProductSize={setProductSize}
                  productName={productName}
                  setProductName={setProductName}
                  meterPerRoll={meterPerRoll}
                  setMeterPerRoll={setMeterPerRoll}
                  rollUp={rollUp}
                  setRollUp={setRollUp}
                  rollMeter={rollMeter}
                  setRollMeter={setRollMeter}
                  type={type}
                  setType={setType}
                  rollQty={rollQty}
                  setRollQty={setRollQty}
                  meterOrPcs={meterOrPcs}
                  setMeterOrPcs={setMeterOrPcs}
                  cuttinglength={cuttinglength}
                  setCuttingLength={setCuttingLength}
                  bagUp={bagUp}
                  setBagUp={setBagUp}
                  bagQty={bagQty}
                  setBagQty={setBagQty}
                  isMeter={isMeter}
                  setIsMeter={setIsMeter}
                  newInkRow={newInkRow}
                  setInkNewRow={setInkNewRow}
                  newGlueRow={newGlueRow}
                  setGlueNewRow={setGlueNewRow}
                  newThinnerRow={newThinnerRow}
                  setThinnerNewRow={setThinnerNewRow}
                  newFilmRow={newFilmRow}
                  setFilmNewRow={setFilmNewRow}
                  newResinRow={newResinRow}
                  setResinNewRow={setResinNewRow}
                  // rollQty={rollQty}
                  core3Amount={core3Amount}
                  setCore3Amount={setCore3Amount}
                  core6Amount={core6Amount}
                  setCore6Amount={setCore6Amount}
                  TSAmount={TSAmount}
                  setTSAmount={setTSAmount}
                  PVCGlueAmount={PVCGlueAmount}
                  setPVCGlueAmount={setPVCGlueAmount}
                  PETGGlueAmount={PETGGlueAmount}
                  setPETGGlueAmount={setPETGGlueAmount}
                  SSDSTAmount={SSDSTAmount}
                  setSSDSTAmount={setSSDSTAmount}
                  LHAmount={LHAmount}
                  setLHAmount={setLHAmount}
                  CBAmount={CBAmount}
                  setCBAmount={setCBAmount}
                  SSRibbonAmount={SSRibbonAmount}
                  setSSRibbonAmount={setSSRibbonAmount}
                  ZipperAmount={ZipperAmount}
                  setZipperAmount={setZipperAmount}
                  directCost={directCost}
                  setDirectCost={setDirectCost}
                  inDirectCost={inDirectCost}
                  setIndirectCost={setIndirectCost}
                  rawTotal={rawTotal}
                  setRawTotal={setRawTotal}
                  OtherMaterialsTotal={OtherMaterialsTotal}
                  setOtherMaterialsTotal={setOtherMaterialsTotal}
                  total={total}
                  setTotal={setTotal}
                  subTotal={subTotal}
                  setSubTotal={setSubTotal}
                  grandTotal={grandTotal}
                  setGrandTotal={setGrandTotal}
                  wastagePercentValue={wastagePercentValue}
                  setWastagePercentValue={setWastagePercentValue}
                  promotionPercentValue={promotionPercentValue}
                  setPromotionPercentValue={setPromotionPercentValue}
                />
              }
            />
            <Route
              path="/about"
              exact
              element={
                <About
                  setStructure={setStructure}
                  setProductSize={setProductSize}
                  setProductName={setProductName}
                  setMeterPerRoll={setMeterPerRoll}
                  setRollUp={setRollUp}
                  setRollMeter={setRollMeter}
                  setType={setType}
                  setRollQty={setRollQty}
                  setMeterOrPcs={setMeterOrPcs}
                  setCuttingLength={setCuttingLength}
                  setBagUp={setBagUp}
                  setBagQty={setBagQty}
                  setIsMeter={setIsMeter}
                  setInkNewRow={setInkNewRow}
                  setGlueNewRow={setGlueNewRow}
                  setThinnerNewRow={setThinnerNewRow}
                  setFilmNewRow={setFilmNewRow}
                  setResinNewRow={setResinNewRow}
                  // rollQty={rollQty}
                  setCore3Amount={setCore3Amount}
                  setCore6Amount={setCore6Amount}
                  setTSAmount={setTSAmount}
                  setPVCGlueAmount={setPVCGlueAmount}
                  setPETGGlueAmount={setPETGGlueAmount}
                  setSSDSTAmount={setSSDSTAmount}
                  setLHAmount={setLHAmount}
                  setCBAmount={setCBAmount}
                  setSSRibbonAmount={setSSRibbonAmount}
                  setZipperAmount={setZipperAmount}
                  setDirectCost={setDirectCost}
                  setIndirectCost={setIndirectCost}
                  setRawTotal={setRawTotal}
                  setOtherMaterialsTotal={setOtherMaterialsTotal}
                  setTotal={setTotal}
                  setSubTotal={setSubTotal}
                  setGrandTotal={setGrandTotal}
                  setWastagePercentValue={setWastagePercentValue}
                  setPromotionPercentValue={setPromotionPercentValue}
                  viewSaved={viewSaved}
                  setViewSaved={setViewSaved}
                />
              }
            />
          </Routes>
          <NavBar>
            <NavItem>
              <Button
                className="icon-button"
                onClick={saveHandler}
                color="secondary"
                endIcon={<SaveIcon />}
                variant="contained"
              >
                Save
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="icon-button"
                href="#perunit"
                color="success"
                endIcon={<CalculateIcon />}
                variant="contained"
              >
                Calculate
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="icon-button"
                onClick={clearHandler}
                color="warning"
                endIcon={<ClearAllIcon />}
                variant="contained"
              >
                Clear
              </Button>
            </NavItem>
            <NavItem>
              {/* {viewSaved ? <FolderSpecialIcon  sx={{ fontSize: 40 }}/> : <ArrowBackIcon  sx={{ fontSize: 40 }}/>} */}
              <span onClick={(e) => setViewSaved(!viewSaved)}>
                {viewSaved ? (
                  <Link to="/about" id="savedPageNav">
                    <FolderSpecialIcon sx={{ fontSize: 40 }} />
                  </Link>
                ) : (
                  <Link to="/" id="savedPageNav">
                    <ArrowBackIcon sx={{ fontSize: 40 }} />
                  </Link>
                )}
              </span>
            </NavItem>
          </NavBar>
        </React.Fragment>
      </ThemeProvider>
    </Router>
  );
};
export default App;

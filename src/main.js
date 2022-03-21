import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import TopBanner from "./sections/topBanner";
import MajorSection from "./sections/major_section";
import RollOrBagSection from "./sections/roll_or_bag";
import Raws from "./sections/raw";
import OtherMaterials from "./sections/other_material";
import DirectIndirectCost from "./sections/directIndirect_cost";
import FinalResult from "./sections/final_Result";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#282c34" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Main = ({
  productName,
  setProductName,
  structure,
  setStructure,
  productSize,
  setProductSize,
  meterPerRoll,
  setMeterPerRoll,
  rollUp,
  setRollUp,
  rollMeter,
  setRollMeter,
  rollQty,
  setRollQty,
  meterOrPcs,
  setMeterOrPcs,
  cuttinglength,
  setCuttingLength,
  bagUp,
  setBagUp,
  bagQty,
  setBagQty,
  isMeter,
  setIsMeter,
  newInkRow,
  setInkNewRow,
  newGlueRow,
  setGlueNewRow,
  newThinnerRow,
  setThinnerNewRow,
  newFilmRow,
  setFilmNewRow,
  newResinRow,
  setResinNewRow,
  core3Length,
  setCore3Length,
  core3Size,
  setCore3Size,
  core3Price,
  setCore3Price,
  core6Length,
  setCore6Length,
  core6Size,
  setCore6Size,
  core6Price,
  setCore6Price,
  TSMeter,
  setTSMeter,
  TSUp,
  setTSUp,
  TSDST,
  setTSDST,
  TSRoll,
  setTSRoll,
  TSPrice,
  setTSPrice,
  PVCGlueMeter,
  setPVCGlueMeter,
  PVCGlueUp,
  setPVCGlueUp,
  PVCGlueQty,
  setPVCGlueQty,
  PVCGluePrice,
  setPVCGluePrice,
  PETGGlueMeter,
  setPETGGlueMeter,
  PETGGlueUp,
  setPETGGlueUp,
  PETGGlueQty,
  setPETGGlueQty,
  PETGGluePrice,
  setPETGGluePrice,
  SSDSTMeter,
  setSSDSTMeter,
  SSDSTUp,
  setSSDSTUp,
  SSDSTDST,
  setSSDSTDST,
  SSDSTRoll,
  setSSDSTRoll,
  SSDSTPrice,
  setSSDSTPrice,
  LHPcs,
  setLHPcs,
  LHPrice,
  setLHPrice,
  CBPcs,
  setCBPcs,
  CBPrice,
  setCBPrice,
  SSRibbonMeter,
  setSSRibbonMeter,
  SSRibbonUp,
  setSSRibbonUp,
  SSRibbonDST,
  setSSRibbonDST,
  SSRibbonRoll,
  setSSRibbonRoll,
  SSRibbonPrice,
  setSSRibbonPrice,
  ZipperMeter,
  setZipperMeter,
  ZipperUp,
  setZipperUp,
  ZipperDST,
  setZipperDST,
  ZipperRoll,
  setZipperRoll,
  ZipperPrice,
  setZipperPrice,

  core3Amount,
  setCore3Amount,
  core6Amount,
  setCore6Amount,
  TSAmount,
  setTSAmount,
  PVCGlueAmount,
  setPVCGlueAmount,
  PETGGlueAmount,
  setPETGGlueAmount,
  SSDSTAmount,
  setSSDSTAmount,
  LHAmount,
  setLHAmount,
  CBAmount,
  setCBAmount,
  SSRibbonAmount,
  setSSRibbonAmount,
  ZipperAmount,
  setZipperAmount,
  directCost,
  setDirectCost,
  inDirectCost,
  setIndirectCost,
  rawTotal,
  setRawTotal,
  OtherMaterialsTotal,
  setOtherMaterialsTotal,
  total,
  setTotal,
  subTotal,
  setSubTotal,
  grandTotal,
  setGrandTotal,
  wastagePercentValue,
  setWastagePercentValue,
  promotionPercentValue,
  setPromotionPercentValue,
  type,
  setType,
}) => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Item className="btn-grad">
              <TopBanner />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <MajorSection
                productName={productName}
                setProductName={setProductName}
                structure={structure}
                setStructure={setStructure}
                productSize={productSize}
                setProductSize={setProductSize}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Item>
              <RollOrBagSection
                meterPerRoll={meterPerRoll}
                setMeterPerRoll={setMeterPerRoll}
                rollUp={rollUp}
                setRollUp={setRollUp}
                rollMeter={rollMeter}
                setRollMeter={setRollMeter}
                rollQty={rollQty}
                setRollQty={setRollQty}
                type={type}
                setType={setType}
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
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={12}>
            <Item>
              <Raws
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
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={12}>
            <Item>
              <OtherMaterials
                core3Length={core3Length}
                setCore3Length={setCore3Length}
                core3Size={core3Size}
                setCore3Size={setCore3Size}
                core3Price={core3Price}
                setCore3Price={setCore3Price}
                core6Length={core6Length}
                setCore6Length={setCore6Length}
                core6Size={core6Size}
                setCore6Size={setCore6Size}
                core6Price={core6Price}
                setCore6Price={setCore6Price}
                TSMeter={TSMeter}
                setTSMeter={setTSMeter}
                TSUp={TSUp}
                setTSUp={setTSUp}
                TSDST={TSDST}
                setTSDST={setTSDST}
                TSRoll={TSRoll}
                setTSRoll={setTSRoll}
                TSPrice={TSPrice}
                setTSPrice={setTSPrice}
                PVCGlueMeter={PVCGlueMeter}
                setPVCGlueMeter={setPVCGlueMeter}
                PVCGlueUp={PVCGlueUp}
                setPVCGlueUp={setPVCGlueUp}
                PVCGlueQty={PVCGlueQty}
                setPVCGlueQty={setPVCGlueQty}
                PVCGluePrice={PVCGluePrice}
                setPVCGluePrice={setPVCGluePrice}
                PETGGlueMeter={PETGGlueMeter}
                setPETGGlueMeter={setPETGGlueMeter}
                PETGGlueUp={PETGGlueUp}
                setPETGGlueUp={setPETGGlueUp}
                PETGGlueQty={PETGGlueQty}
                setPETGGlueQty={setPETGGlueQty}
                PETGGluePrice={PETGGluePrice}
                setPETGGluePrice={setPETGGluePrice}
                SSDSTMeter={SSDSTMeter}
                setSSDSTMeter={setSSDSTMeter}
                SSDSTUp={SSDSTUp}
                setSSDSTUp={setSSDSTUp}
                SSDSTDST={SSDSTDST}
                setSSDSTDST={setSSDSTDST}
                SSDSTRoll={SSDSTRoll}
                setSSDSTRoll={setSSDSTRoll}
                SSDSTPrice={SSDSTPrice}
                setSSDSTPrice={setSSDSTPrice}
                LHPcs={LHPcs}
                setLHPcs={setLHPcs}
                LHPrice={LHPrice}
                setLHPrice={setLHPrice}
                CBPcs={CBPcs}
                setCBPcs={setCBPcs}
                CBPrice={CBPrice}
                setCBPrice={setCBPrice}
                SSRibbonMeter={SSRibbonMeter}
                setSSRibbonMeter={setSSRibbonMeter}
                SSRibbonUp={SSRibbonUp}
                setSSRibbonUp={setSSRibbonUp}
                SSRibbonDST={SSRibbonDST}
                setSSRibbonDST={setSSRibbonDST}
                SSRibbonRoll={SSRibbonRoll}
                setSSRibbonRoll={setSSRibbonRoll}
                SSRibbonPrice={SSRibbonPrice}
                setSSRibbonPrice={setSSRibbonPrice}
                ZipperMeter={ZipperMeter}
                setZipperMeter={setZipperMeter}
                ZipperUp={ZipperUp}
                setZipperUp={setZipperUp}
                ZipperDST={ZipperDST}
                setZipperDST={setZipperDST}
                ZipperRoll={ZipperRoll}
                setZipperRoll={setZipperRoll}
                ZipperPrice={ZipperPrice}
                setZipperPrice={setZipperPrice}
                rollQty={rollQty}
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
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <DirectIndirectCost
                directCost={directCost}
                setDirectCost={setDirectCost}
                inDirectCost={inDirectCost}
                setIndirectCost={setIndirectCost}
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <FinalResult
                rollQty={rollQty}
                directCost={directCost}
                inDirectCost={inDirectCost}
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
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Main;

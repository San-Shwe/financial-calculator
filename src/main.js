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

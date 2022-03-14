import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

import twoDecimalPlacesIfCents from '../Modules/global_module.mjs';

const blue = {
  50: '#E8E8E8', // tab background when focus
  100: '#D82148',
  200: '#495464', //tab border
  300: '#495464',
  400: '#CCD1E4', //tab background when hover
  500: '#BBBFCA', //panel background
  600: '#495464', //text color
  700: '#9B0000',
  800: '#9B0000',
  900: '#9B0000',
};

const Tab = styled(TabUnstyled)`
  color: "#B2B1B9";
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// font-family: IBM Plex Sans, sans-serif;
const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function OtherMaterials
({rollQty, core3Amount, setCore3Amount, core6Amount, setCore6Amount, TSAmount, setTSAmount, PVCGlueAmount, setPVCGlueAmount, PETGGlueAmount, setPETGGlueAmount, SSDSTAmount, setSSDSTAmount, LHAmount, setLHAmount, CBAmount, setCBAmount, SSRibbonAmount, setSSRibbonAmount,  ZipperAmount, setZipperAmount}) {

  // States for OTHER MATERIALS ------------------------------------------------------------------------------------------------------------------------
  // states for Roll From Tab
  let [core3Length, setCore3Length] = useState(0); // papercore3"
  let [core3Size, setCore3Size] = useState(0);
  let [core3Price, setCore3Price] = useState(0);
  let [core6Length, setCore6Length] = useState(0); // papercore6"
  let [core6Size, setCore6Size] = useState(0);
  let [core6Price, setCore6Price] = useState(0);

  // states for T.S(Double Side Tape) Tab
  let [TSMeter, setTSMeter] = useState(0);
  let [TSUp, setTSUp] = useState(0);
  let [TSDST, setTSDST] = useState(0);
  let [TSRoll, setTSRoll] = useState(0);
  let [TSPrice, setTSPrice] = useState(0);

  // ---------- states for T.S(Double Side Tape) Tab
  let [PVCGlueMeter, setPVCGlueMeter] = useState(0); // PVC Glue
  let [PVCGlueUp, setPVCGlueUp] = useState(0);
  let [PVCGlueQty, setPVCGlueQty] = useState(0);
  let [PVCGluePrice, setPVCGluePrice] = useState(0);
  let [PETGGlueMeter, setPETGGlueMeter] = useState(0); // PETG Glue
  let [PETGGlueUp, setPETGGlueUp] = useState(0);
  let [PETGGlueQty, setPETGGlueQty] = useState(0);
  let [PETGGluePrice, setPETGGluePrice] = useState(0);

  // ---------- states for Side Seal Tab
  let [SSDSTMeter, setSSDSTMeter] = useState(0); 
  let [SSDSTUp, setSSDSTUp] = useState(0);
  let [SSDSTDST, setSSDSTDST] = useState(0);
  let [SSDSTRoll, setSSDSTRoll] = useState(0);
  let [SSDSTPrice, setSSDSTPrice] = useState(0);

  let [LHPcs, setLHPcs]  = useState(0);
  let [LHPrice, setLHPrice]  = useState(0);

  let [CBPcs, setCBPcs]  = useState(0);
  let [CBPrice, setCBPrice]  = useState(0);

  let [SSRibbonMeter, setSSRibbonMeter] = useState(0); 
  let [SSRibbonUp, setSSRibbonUp] = useState(0);
  let [SSRibbonDST, setSSRibbonDST] = useState(0);
  let [SSRibbonRoll, setSSRibbonRoll] = useState(0);
  let [SSRibbonPrice, setSSRibbonPrice] = useState(0);

  // ---------- states for 4.S.S(Zipper) Tab
  let [ZipperMeter, setZipperMeter] = useState(0);
  let [ZipperUp, setZipperUp] = useState(0);
  let [ZipperDST, setZipperDST] = useState(0);
  let [ZipperRoll, setZipperRoll] = useState(0);
  let [ZipperPrice, setZipperPrice] = useState(0);
  
  // Handlers For Roll From Tab
  const Core3Handler = (e) => {
    setCore3Size(document.getElementById('core3size').value)
    setCore3Length(rollQty * document.getElementById('core3size').value)
    setCore3Price(document.getElementById('core3price').value)
    setCore3Amount(twoDecimalPlacesIfCents(document.getElementById('core3length').value * document.getElementById('core3price').value))
  }
  const Core6Handler = (e) => {
    setCore6Size(document.getElementById('core6size').value)
    setCore6Length(rollQty * document.getElementById('core6size').value)
    setCore6Price(document.getElementById('core6price').value)
    setCore6Amount(twoDecimalPlacesIfCents(document.getElementById('core6length').value * document.getElementById('core6price').value))
  }

  // Handlers for TS(Double Side Tape) Tab
  const TSDSTHandler = (e) => {
    setTSMeter(document.getElementById('ts_meter').value);
    setTSUp(document.getElementById('ts_up').value);
    setTSDST(document.getElementById('ts_dst').value);
    setTSRoll(twoDecimalPlacesIfCents((document.getElementById('ts_meter').value * document.getElementById('ts_up').value)/document.getElementById('ts_dst').value));
    setTSPrice(document.getElementById('ts_price').value);
    setTSAmount(twoDecimalPlacesIfCents(document.getElementById('ts_roll').value * document.getElementById('ts_price').value));
  }

  // Handlers for T.C.S(Glue) Tab
  const TCSGluePVCHandler = (e) => {
    setPVCGlueMeter(document.getElementById('pvcGlue_meter').value);
    setPVCGlueUp(document.getElementById('pvcGlue_up').value);
    setPVCGlueQty(twoDecimalPlacesIfCents((document.getElementById('pvcGlue_meter').value * document.getElementById('pvcGlue_up').value)/ 3000));
    setPVCGluePrice(document.getElementById('pvcGlue_price').value);
    setPVCGlueAmount(twoDecimalPlacesIfCents(PVCGlueQty * document.getElementById('pvcGlue_price').value));
  }
  const TCSGluePETGHandler = (e) => {
    setPETGGlueMeter(document.getElementById('petgGlue_meter').value);
    setPETGGlueUp(document.getElementById('petgGlue_up').value);
    setPETGGlueQty(parseFloat((document.getElementById('petgGlue_meter').value * document.getElementById('petgGlue_up').value)/ 3000).toFixed(2).replace(/\.00$/, ''));
    setPETGGluePrice(document.getElementById('petgGlue_price').value);
    setPETGGlueAmount(parseFloat(PETGGlueQty * document.getElementById('petgGlue_price').value).toFixed(2).replace(/\.00$/, ''));
  }

  // Handlers for Side Seal Tab
    const SSDSTHandler = (e) => { // Side Seal >> Double Side Tape Handler
      setSSDSTMeter(document.getElementById('ssdst_meter').value);
      setSSDSTUp(document.getElementById('ssdst_up').value);
      setSSDSTDST(document.getElementById('ssdst_dst').value);
      setSSDSTRoll(parseFloat((document.getElementById('ssdst_meter').value * document.getElementById('ssdst_up').value)/document.getElementById('ssdst_dst').value).toFixed(2).replace(/\.00$/, ''));
      setSSDSTPrice(document.getElementById('ssdst_price').value);
      setSSDSTAmount((document.getElementById('ssdst_roll').value * document.getElementById('ssdst_price').value).toFixed(2).replace(/\.00$/, ''));
    }
    const SSLHHandler = (e) => {  // Side Seal >> Loop Handle Handler
      setLHPcs(document.getElementById('sslh_pcs').value);
      setLHPrice(document.getElementById('sslh_price').value);
      setLHAmount(twoDecimalPlacesIfCents(document.getElementById('sslh_pcs').value * document.getElementById('sslh_price').value));
    }
    const SSCBHandler = (e) => { // Side Seal >> Card Board Handler
      setCBPcs(document.getElementById('sscb_pcs').value);
      setCBPrice(document.getElementById('sscb_price').value);
      setCBAmount(twoDecimalPlacesIfCents(document.getElementById('sscb_pcs').value * document.getElementById('sscb_price').value));
    }
    
    const SSRibbonHandler = (e) => { // Side Seal >> Double Side Tape Handler
      setSSRibbonMeter(document.getElementById('ssdRibbon_meter').value);
      setSSRibbonUp(document.getElementById('ssdRibbon_up').value);
      setSSRibbonDST(document.getElementById('ssdRibbon_dst').value);
      setSSRibbonRoll(twoDecimalPlacesIfCents((document.getElementById('ssdRibbon_meter').value * document.getElementById('ssdRibbon_up').value)/document.getElementById('ssdRibbon_dst').value));
      setSSRibbonPrice(document.getElementById('ssdRibbon_price').value);
      setSSRibbonAmount(twoDecimalPlacesIfCents(document.getElementById('ssdRibbon_roll').value * document.getElementById('ssdRibbon_price').value));
    }

    // Handlers for Zipper Tab
    const ZipperHandler = (e) => { 
      setZipperMeter(document.getElementById('ssdRibbon_meter').value);
      setZipperUp(document.getElementById('ssdRibbon_up').value);
      setZipperDST(document.getElementById('ssdRibbon_dst').value);
      setZipperRoll(twoDecimalPlacesIfCents((document.getElementById('ssdRibbon_meter').value * document.getElementById('ssdRibbon_up').value)/document.getElementById('ssdRibbon_dst').value));
      setZipperPrice(document.getElementById('ssdRibbon_price').value);
      setZipperAmount(twoDecimalPlacesIfCents(document.getElementById('ssdRibbon_roll').value * document.getElementById('ssdRibbon_price').value));
    }

  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Roll Form</Tab>
        <Tab>T.S (Double Side Tape)</Tab>
        <Tab>T.C.S (Glue)</Tab>
        <Tab>Side Seal</Tab>
        <Tab>4.S.S Zipper</Tab>
      </TabsList>
      <TabPanel value={0}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={0.5}
            sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }}
          >
            {/* <span style={{ padding: 5, fontWeight: 5000 }}>&nbsp;</span> */}
            <span>Paper Core 3"</span>
            <TextField value={rollQty} size="small" color="secondary" label="Roll Qty" variant="outlined" />
            <TextField value={core3Size} id="core3size" onChange={Core3Handler} size="small" color="secondary" label="Size"/>
            <TextField value={core3Length} id="core3length" onChange={Core3Handler} size="small" color="secondary" label="Length"/>
            <TextField value={core3Price} id="core3price" onChange={Core3Handler} size="small" color="secondary" label="Price"/>
            <span style={{ padding: 10, fontWeight: 5000 }}>${core3Amount}</span>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={0.5}
            sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }}
          >
            <span>Paper Core 6"</span>
            <TextField value={rollQty} size="small" color="secondary" label="Roll Qty" variant="outlined" />
            <TextField value={core6Size} id="core6size" onChange={Core6Handler} size="small" color="secondary" label="Size"/>
            <TextField value={core6Length} id="core6length" onChange={Core6Handler} size="small" color="secondary" label="Length"/>
            <TextField value={core6Price} id="core6price" onChange={Core6Handler} size="small" color="secondary" label="Price"/>
            <span style={{ padding: 10, fontWeight: 5000 }}>${core6Amount}</span>
          </Stack>
      </TabPanel>
      <TabPanel value={1}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={0.5}
            sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }}
          >
            <TextField value={TSMeter} id="ts_meter" onChange={TSDSTHandler} size="small" color="secondary" label="Meter" variant="outlined" />
            <TextField value={TSUp} id="ts_up" onChange={TSDSTHandler} size="small" color="secondary" label="Up" variant="outlined" />
            <TextField value={TSDST} id="ts_dst" onChange={TSDSTHandler} size="small" color="secondary" label="D.S.Tape"/>
            <TextField value={TSRoll} id="ts_roll" onChange={TSDSTHandler} size="small" color="secondary" label="Roll"/>
            <TextField value={TSPrice} id="ts_price" onChange={TSDSTHandler} size="small" color="secondary" label="Price"/>
            <span id="soloGlueAmount" style={{ padding: 10, fontWeight: 5000 }}>${TSAmount}</span>
          </Stack>
      </TabPanel>
      <TabPanel value={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={0.5}
          sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }}
        >
          <span>Paper Core 3"</span>
          <TextField value={PVCGlueMeter} id="pvcGlue_meter" onChange={TCSGluePVCHandler} size="small" color="secondary" label="Meter" variant="outlined" />
          <TextField value={PVCGlueUp} id="pvcGlue_up" onChange={TCSGluePVCHandler} size="small" color="secondary" label="Up" variant="outlined" />
          <TextField value={PVCGlueQty} id="pvcGlue_qty" onChange={TCSGluePVCHandler} size="small" color="secondary" label="Qty"/>
          <TextField value={PVCGluePrice} id="pvcGlue_price" onChange={TCSGluePVCHandler} size="small" color="secondary" label="Price"/>
          <span id="soloGlueAmount" style={{ padding: 10, fontWeight: 5000 }}>${PVCGlueAmount}</span>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={0.5}
          sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }}
        >
          <span>Paper Core 3"</span>
          <TextField value={PETGGlueMeter} id="petgGlue_meter" onChange={TCSGluePETGHandler} size="small" color="secondary" label="Meter" variant="outlined" />
          <TextField value={PETGGlueUp} id="petgGlue_up" onChange={TCSGluePETGHandler} size="small" color="secondary" label="Up" variant="outlined" />
          <TextField value={PETGGlueQty} id="petgGlue_qty" onChange={TCSGluePETGHandler} size="small" color="secondary" label="Qty"/>
          <TextField value={PETGGluePrice} id="petgGlue_price" onChange={TCSGluePETGHandler} size="small" color="secondary" label="Price"/>
          <span id="soloGlueAmount" style={{ padding: 10, fontWeight: 5000 }}>${PETGGlueAmount}</span>
        </Stack>
      </TabPanel>
      <TabPanel value={3}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={0.5}
          sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }}
        >
          <span>Double Side Tape</span>
          <TextField value={SSDSTMeter} id="ssdst_meter" onChange={SSDSTHandler} size="small" color="secondary" label="Meter" variant="outlined" />
          <TextField value={SSDSTUp} id="ssdst_up" onChange={SSDSTHandler} size="small" color="secondary" label="Up" variant="outlined" />
          <TextField value={SSDSTDST} id="ssdst_dst" onChange={SSDSTHandler} size="small" color="secondary" label="D.S.Tape"/>
          <TextField value={SSDSTRoll} id="ssdst_roll" onChange={SSDSTHandler} size="small" color="secondary" label="Roll"/>
          <TextField value={SSDSTPrice} id="ssdst_price" onChange={SSDSTHandler} size="small" color="secondary" label="Price"/>
          <span id="soloGlueAmount" style={{ padding: 10, fontWeight: 5000 }}>${SSDSTAmount}</span>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={0.5} sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }} >
          <span>Loop Handle</span>
          <TextField value={LHPcs} id="sslh_pcs" onChange={SSLHHandler} size="small" color="secondary" label="Pcs" variant="outlined" />
          <TextField value={LHPrice} id="sslh_price" onChange={SSLHHandler} size="small" color="secondary" label="Price" variant="outlined" />
          <span id="soloGlueAmount" style={{ padding: 10, fontWeight: 5000 }}>${LHAmount}</span>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={0.5} sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }} >
          <span>Card Board</span>
          <TextField value={CBPcs} id="sscb_pcs" onChange={SSCBHandler} size="small" color="secondary" label="Pcs" variant="outlined" />
          <TextField value={CBPrice} id="sscb_price" onChange={SSCBHandler} size="small" color="secondary" label="Price" variant="outlined" />
          <span id="soloGlueAmount" style={{ padding: 10, fontWeight: 5000 }}>${CBAmount}</span>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={0.5} sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }}>
          <span>Double Side Tape</span>
          <TextField value={SSRibbonMeter} id="ssdRibbon_meter" onChange={SSRibbonHandler} size="small" color="secondary" label="Meter" variant="outlined" />
          <TextField value={SSRibbonUp} id="ssdRibbon_up" onChange={SSRibbonHandler} size="small" color="secondary" label="Up" variant="outlined" />
          <TextField value={SSRibbonDST} id="ssdRibbon_dst" onChange={SSRibbonHandler} size="small" color="secondary" label="D.S.Tape"/>
          <TextField value={SSRibbonRoll} id="ssdRibbon_roll" onChange={SSRibbonHandler} size="small" color="secondary" label="Roll"/>
          <TextField value={SSRibbonPrice} id="ssdRibbon_price" onChange={SSRibbonHandler} size="small" color="secondary" label="Price"/>
          <span id="soloGlueAmount" style={{ padding: 10, fontWeight: 5000 }}>${SSRibbonAmount}</span>
        </Stack>
      </TabPanel>
      <TabPanel value={4}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={0.5} sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }}>
          <TextField value={ZipperMeter} id="ssdRibbon_meter" onChange={ZipperHandler} size="small" color="secondary" label="Meter" variant="outlined" />
          <TextField value={ZipperUp} id="ssdRibbon_up" onChange={ZipperHandler} size="small" color="secondary" label="Up" variant="outlined" />
          <TextField value={ZipperDST} id="ssdRibbon_dst" onChange={ZipperHandler} size="small" color="secondary" label="D.S.Tape"/>
          <TextField value={ZipperRoll} id="ssdRibbon_roll" onChange={ZipperHandler} size="small" color="secondary" label="Roll"/>
          <TextField value={ZipperPrice} id="ssdRibbon_price" onChange={ZipperHandler} size="small" color="secondary" label="Price"/>
          <span id="soloGlueAmount" style={{ padding: 10, fontWeight: 5000 }}>${ZipperAmount}</span>
          </Stack>
      </TabPanel>
    </TabsUnstyled>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const Structures = [
//   { id:1, label: 'The Shawshank Redemption', year: 1994 },
//   { id:2, label: 'The Godfather', year: 1972 },
//   { id:3, label: 'The Godfather: Part II', year: 1974 },
//   { id:4, label: 'The Dark Knight', year: 2008 },
//   { id:5, label: '12 Angry Men', year: 1957 },
//   { id:6, label: "Schindler's List", year: 1993 },
//   { id:7, label: 'Pulp Fiction', year: 1994 },
// ];
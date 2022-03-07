import React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const blue = {
  50: '#E8E8E8', // tab background when focus
  100: '#D82148',
  200: '#495464', //tab border
  300: '#495464',
  400: '#CCD1E4', //tab background when hover
  500: '#BBBFCA', //panel background
  600: '#495464', //text color when focus
  700: '#9B0000',
  800: '#9B0000',
  900: '#9B0000',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: '#B2B1B9';
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

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
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

export default function UnstyledTabsCustomized() {

  const [meterPerRoll, setMeterPerRoll] = React.useState('');
  const [rollUp, setRollUp] = React.useState('');
  const [rollMeter, setRollMeter] = React.useState('');
  const [rollQty, setRollQty] = React.useState(0);

  const JRollHandler = (e) => {
    setMeterPerRoll(e.target.value);
    setRollQty(parseFloat((Number(document.getElementById('rollmeter').value) / Number(document.getElementById('rollmr').value) * Number(document.getElementById('rollup').value))).toFixed(2));
  }

  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Roll Form</Tab>
        <Tab>Bag Form</Tab>
        <Tab>Kg Form</Tab>
      </TabsList>
      <TabPanel value={0}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={0.5}
          sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
        >
          <TextField id="rollup" value={rollUp} onChange={(e)=>setRollUp(e.target.value)} size="small" color="secondary" label="Up" variant="outlined" />
          <TextField id="rollmeter" value={rollMeter} onChange={(e)=>setRollMeter(e.target.value)} size="small" color="secondary" label="Meter" variant="outlined" />
          <TextField id="rollmr" value={meterPerRoll} onChange={JRollHandler} size="small" color="secondary" label="M/R" variant="outlined" />
          <Divider orientation="vertical" flexItem />
          <span style={{ padding: 10, borderRadius: 10 }}>{rollQty}<small>JRolls</small></span>
        </Stack>
      </TabPanel>
      <TabPanel value={1}>
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={0.5}
            sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
          >
            <TextField id="meterOrpcs" size="small" color="secondary" label="Meter Or Pcs" variant="outlined" />
            <TextField id="cuttinglength" size="small" color="secondary" label="Cutting Length" variant="outlined" />
            <TextField id="bagup" size="small" color="secondary" label="Up" variant="outlined" />
            <Divider color="primary" orientation="vertical" flexItem />
            <Typography style={{ padding: 10, fontWeight: 5000 }}>$0.00</Typography>
          </Stack>
      </TabPanel>
      <TabPanel value={2}>currently unavailable</TabPanel>
    </TabsUnstyled>
  );
}


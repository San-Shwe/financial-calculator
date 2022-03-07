import React, {useState} from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Icon from '@mui/material/Icon';
import ClearIcon from '@mui/icons-material/Clear';

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
  font-family: IBM Plex Sans, sans-serif;
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

const InkInputs = ({newInkRow, setInkNewRow}) => {
  return (
    <div>
      {newInkRow.map(i => 
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={0.5}
            key={i.id}
            sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }}
          >
            <span style={{ padding: 5, fontWeight: 5000 }}>{i.id}</span> 
            <Autocomplete
              size="small"
              color="secondary"
              options={Structures}
              value={Structures[i.name - 1]}
              getOptionLabel={(option) => option.label}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Structure" />}
            />
            <TextField size="small" color="secondary" value={i.price} />
            <TextField value={i.qty} size="small" color="secondary" variant="outlined" />
            <span style={{ padding: 10, fontWeight: 5000 }}>${i.amount}</span>
            <a href='#' onClick={(e) => {setInkNewRow(newInkRow.filter(row => row.id !== i.id))}} style={{backgroundColor:"transparent", color:"red"}} className='icon-button'>
              <ClearIcon />
            </a>
          </Stack>
      )}
    </div>
  );
}

const GlueInputs = ({newGlueRow, setGlueNewRow}) => {
  return (
    <div>
      {newGlueRow.map(i => 
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={0.5}
            key={i.id}
            sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }}
          >
            <span style={{ padding: 5, fontWeight: 5000 }}>{i.id}</span> 
            <Autocomplete
              size="small"
              color="secondary"
              options={Structures}
              value={Structures[i.name - 1]}
              getOptionLabel={(option) => option.label}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Structure" />}
            />
            <TextField size="small" color="secondary" value={i.price} />
            <TextField value={i.qty} size="small" color="secondary" variant="outlined" />
            <span style={{ padding: 10, fontWeight: 5000 }}>${i.amount}</span>
            <a href='#' onClick={(e) => {setGlueNewRow(newGlueRow.filter(row => row.id !== i.id))}} style={{backgroundColor:"transparent", color:"red"}} className='icon-button'>
              <ClearIcon />
            </a>
          </Stack>
      )}
    </div>
  );
}

export default function UnstyledTabsCustomized({newInkRow, setInkNewRow, newGlueRow, setGlueNewRow, newFilmRow, setFilmNewRow, inkPrice, setInkPrice, inkName, setInkName, inkQty, setInkQty}) {
  
  // States for Ink ------------------------------------------------------------------------------------------------------------------------
  let [inkNameInput, setInkNameInput] = React.useState(Structures[0]);
  let [inkQtyInput, setInkQtyInput] = React.useState('');
  let [inkPriceInput, setInkPriceInput] = React.useState('');
  let [inkPreviewAmount, setInkPreviewAmount] = React.useState('');

  // Hook for Ink
  const newInkHandler = (e) => {
    setInkNewRow([
      ...newInkRow, 
      { id:newInkRow.length + 1, name:inkNameInput.id, price:inkPriceInput, qty:inkQtyInput, amount:inkPriceInput*inkQtyInput },
    ]);
    setInkNameInput(null);
    setInkPriceInput("");
    setInkQtyInput("");
    setInkPreviewAmount(0)
  }

  // Ink's Amount preview
  const InkRollQtyHandler = (e) => {
    setInkQtyInput(e.target.value);
    setInkPreviewAmount(parseFloat(document.getElementById('soloInkPrice').value * document.getElementById('soloInkQty').value).toFixed(2));
  }

  // ------------------------------------------------------------------------------------------------------------------------


  // States for Glue ------------------------------------------------------------------------------------------------------------------------
  let [glueNameInput, setGlueNameInput] = React.useState(Structures[0]);
  let [glueQtyInput, setGlueQtyInput] = React.useState('');
  let [gluePriceInput, setGluePriceInput] = React.useState('');
  let [gluePreviewAmount, setGluePreviewAmount] = React.useState('');

  // Hook for Ink
  const newGlueHandler = (e) => {
    setGlueNewRow([
      ...newGlueRow, 
      { id:newGlueRow.length + 1, name:glueNameInput.id, price:gluePriceInput, qty:glueQtyInput, amount:gluePriceInput*glueQtyInput },
    ]);
    setGlueNameInput(null);
    setGluePriceInput("");
    setGlueQtyInput("");
    setGluePreviewAmount(0)
  }

  // Glue's Amount preview
  const GlueRollQtyHandler = (e) => {
    setGlueQtyInput(e.target.value);
    setGluePreviewAmount(parseFloat(document.getElementById('soloGluePrice').value * document.getElementById('soloGlueQty').value).toFixed(2));
  }

  // States for Thinner ------------------------------------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------------------------------------
  

  
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>INK</Tab>
        <Tab>GLUE</Tab>
        <Tab>THINNER</Tab>
        <Tab>FILM</Tab>
        <Tab>RESIN</Tab>
      </TabsList>
      <TabPanel value={0}> 
        <InkInputs newInkRow={newInkRow} setInkNewRow={setInkNewRow} />
        <Divider color="primary" /><br />
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={0.5}
            sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }}
          >
            <span style={{ padding: 5, fontWeight: 5000 }}>&nbsp;</span>
            <Autocomplete
              size="small"
              options={Structures}
              getOptionLabel={(option) => option.label}
              sx={{ width: 250 }}

              value={inkNameInput}
              onChange={(event, newValue) => {
                setInkNameInput(newValue);
              }}

              renderInput={(params) => <TextField color="primary" {...params} label="Structure" />}
            />
            <TextField id="soloInkPrice" value={inkPriceInput} onChange={(e) => setInkPriceInput(e.target.value)} size="small" color="primary" label="Unit Price"/>
            <TextField id="soloInkQty" value={inkQtyInput} onChange={InkRollQtyHandler} size="small" color="secondary" label="Qty (Kg)" variant="outlined" />
            <span id="soloInkAmount" style={{ padding: 10, fontWeight: 5000 }}>${inkPreviewAmount}</span>
            <a href='#' style={{backgroundColor:"transparent", color: '#139487'}} className='icon-button'>
            <Icon onClick={newInkHandler} sx={{ fontSize: 40, color:"primary" }}>add_circle</Icon> 
          </a>
          </Stack>
      </TabPanel>
      <TabPanel value={1}>
        <GlueInputs newGlueRow={newGlueRow} setGlueNewRow={setGlueNewRow} />
          <Divider color="primary" /><br />
          <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              spacing={0.5}
              sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }}
            >
              <span style={{ padding: 5, fontWeight: 5000 }}>&nbsp;</span>
              <Autocomplete
                size="small"
                options={Structures}
                getOptionLabel={(option) => option.label}
                sx={{ width: 250 }}

                value={inkNameInput}
                onChange={(event, newValue) => {
                  setGlueNameInput(newValue);
                }}

                renderInput={(params) => <TextField color="primary" {...params} label="Structure" />}
              />
              <TextField id="soloGluePrice" value={gluePriceInput} onChange={(e) => setGluePriceInput(e.target.value)} size="small" color="primary" label="Unit Price"/>
              <TextField id="soloGlueQty" value={glueQtyInput} onChange={GlueRollQtyHandler} size="small" color="secondary" label="Qty (Kg)" variant="outlined" />
              <span id="soloGlueAmount" style={{ padding: 10, fontWeight: 5000 }}>${gluePreviewAmount}</span>
              <a href='#' style={{backgroundColor:"transparent", color: '#139487'}} className='icon-button'>
              <Icon onClick={newGlueHandler} sx={{ fontSize: 40, color:"primary" }}>add_circle</Icon> 
            </a>
          </Stack>
      </TabPanel>
      <TabPanel value={2}>
        c
      </TabPanel>
      <TabPanel value={3}>b</TabPanel>
      <TabPanel value={4}>a</TabPanel>
    </TabsUnstyled>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Structures = [
  { id:1, label: 'The Shawshank Redemption', year: 1994 },
  { id:2, label: 'The Godfather', year: 1972 },
  { id:3, label: 'The Godfather: Part II', year: 1974 },
  { id:4, label: 'The Dark Knight', year: 2008 },
  { id:5, label: '12 Angry Men', year: 1957 },
  { id:6, label: "Schindler's List", year: 1993 },
  { id:7, label: 'Pulp Fiction', year: 1994 },
];
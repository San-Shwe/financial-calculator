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
            <TextField value={i.qty} size="small" color="secondary" variant="outlined" />
            <TextField size="small" color="secondary" value={i.price} />
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
            <TextField value={i.qty} size="small" color="secondary" variant="outlined" />
            <TextField size="small" color="secondary" value={i.price} />
            <span style={{ padding: 10, fontWeight: 5000 }}>${i.amount}</span>
            <a href='#' onClick={(e) => {setGlueNewRow(newGlueRow.filter(row => row.id !== i.id))}} style={{backgroundColor:"transparent", color:"red"}} className='icon-button'>
              <ClearIcon />
            </a>
          </Stack>
      )}
    </div>
  );
}

const ThinnerInputs = ({newThinnerRow, setThinnerNewRow}) => {
  return (
    <div>
      {newThinnerRow.map(i => 
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
            <TextField value={i.qty} size="small" color="secondary" variant="outlined" />
            <TextField size="small" color="secondary" value={i.price} />
            <span style={{ padding: 10, fontWeight: 5000 }}>${i.amount}</span>
            <a href='#' onClick={(e) => {setThinnerNewRow(newThinnerRow.filter(row => row.id !== i.id))}} style={{backgroundColor:"transparent", color:"red"}} className='icon-button'>
              <ClearIcon />
            </a>
          </Stack>
      )}
    </div>
  );
}

const FilmInputs = ({newFilmRow, setFilmNewRow}) => {
  return (
    <div>
      {newFilmRow.map(i => 
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
            <TextField size="small" color="secondary" value={i.width} />
            <TextField size="small" color="secondary" value={i.thickness} />
            <TextField size="small" color="secondary" value={i.length} />
            <TextField size="small" color="secondary" value={i.density} />
            <TextField size="small" color="secondary" value={i.qty} />
            <TextField size="small" color="secondary" value={i.price} />
            <span style={{ padding: 10, fontWeight: 5000 }}>${i.amount}</span>
            <a href='#' onClick={(e) => {setFilmNewRow(newFilmRow.filter(row => row.id !== i.id))}} style={{backgroundColor:"transparent", color:"red"}} className='icon-button'>
              <ClearIcon />
            </a>
          </Stack>
      )}
    </div>
  );
}

export default function UnstyledTabsCustomized({newInkRow, setInkNewRow, newGlueRow, setGlueNewRow, newThinnerRow, setThinnerNewRow, newFilmRow, setFilmNewRow, inkPrice, setInkPrice, inkName, setInkName, inkQty, setInkQty}) {
  
  // States for Ink ------------------------------------------------------------------------------------------------------------------------
    let [inkNameInput, setInkNameInput] = React.useState(Structures[0]);
    let [inkQtyInput, setInkQtyInput] = React.useState('');
    let [inkPriceInput, setInkPriceInput] = React.useState('');
    let [inkPreviewAmount, setInkPreviewAmount] = React.useState('');

    // Hook for Ink
    const newInkHandler = (e) => {
      if (inkNameInput !== null ) {
        setInkNewRow([
          ...newInkRow, 
          { id:newInkRow.length + 1, name:inkNameInput.id, price:inkPriceInput, qty:inkQtyInput, amount:inkPriceInput*inkQtyInput },
        ]);
        setInkNameInput(null);
        setInkPriceInput("");
        setInkQtyInput("");
        setInkPreviewAmount(0)
      }else{
        alert("Please Choose A Raw Type!😔");
      }
    }

    // Ink's Amount preview
    const InkRollPriceHandler = (e) => {
      setInkPriceInput(e.target.value);
      setInkPreviewAmount(parseFloat(document.getElementById('soloInkPrice').value * document.getElementById('soloInkQty').value).toFixed(2));
    }

  // ------------------------------------------------------------------------------------------------------------------------


  // States for Glue ------------------------------------------------------------------------------------------------------------------------
  let [glueNameInput, setGlueNameInput] = React.useState(Structures[0]);
  let [glueQtyInput, setGlueQtyInput] = React.useState('');
  let [gluePriceInput, setGluePriceInput] = React.useState('');
  let [gluePreviewAmount, setGluePreviewAmount] = React.useState('');

  // Hook for Glue
  const newGlueHandler = (e) => {
    if (glueNameInput !== null ) {
      setGlueNewRow([
        ...newGlueRow, 
        { id:newGlueRow.length + 1, name:glueNameInput.id, price:gluePriceInput, qty:glueQtyInput, amount:gluePriceInput*glueQtyInput },
      ]);
      setGlueNameInput(null);
      setGluePriceInput("");
      setGlueQtyInput("");
      setGluePreviewAmount(0)
    }else{
            alert("Please Choose A Raw Type!😔");
    }
  }

  // Glue's Amount preview
  const GlueHandler = (e) => {
    setGluePriceInput(document.getElementById('soloGluePrice').value);
    setGlueQtyInput(document.getElementById('soloGlueQty').value);    
    setGluePreviewAmount(parseFloat(document.getElementById('soloGluePrice').value * document.getElementById('soloGlueQty').value).toFixed(2));
  }

  // States for Thinner ------------------------------------------------------------------------------------------------------------
    let [thinnerNameInput, setThinnerNameInput] = React.useState(Structures[0]);
    let [thinnerQtyInput, setThinnerQtyInput] = React.useState('');
    let [thinnerPriceInput, setThinnerPriceInput] = React.useState('');
    let [thinnerPreviewAmount, setThinnerPreviewAmount] = React.useState('');

    // Hook for Ink
    const newThinnerHandler = (e) => {
      if (thinnerNameInput !== null ) {
        setThinnerNewRow([
          ...newThinnerRow, 
          { id:newThinnerRow.length + 1, name:thinnerNameInput.id, price:thinnerPriceInput, qty:thinnerQtyInput, amount:thinnerPriceInput*thinnerQtyInput },
        ]);
        setThinnerNameInput(null);
        setThinnerPriceInput("");
        setThinnerQtyInput("");
        setThinnerPreviewAmount(0)
      }else{
                  alert("Please Choose A Raw Type!😔");
      }
    }

    // Thinner's Amount preview
    const ThinnerHandler = (e) => {
      setThinnerQtyInput(document.getElementById('soloThinnerQty').value);
      setThinnerPriceInput(document.getElementById('soloThinnerPrice').value);
      setThinnerPreviewAmount(parseFloat(document.getElementById('soloThinnerPrice').value * document.getElementById('soloThinnerQty').value).toFixed(2));
    }
  // ------------------------------------------------------------------------------------------------------------
  
  // States for Film ------------------------------------------------------------------------------------------------------------
    let [filmNameInput, setFilmNameInput] = React.useState(Structures[0]);
    let [filmWidthInput, setFilmWidthInput] = React.useState(''); // width
    let [filmThicknessInput, setFilmThicknessInput] = React.useState(''); // thickness
    let [filmLengthInput, setFilmLengthInput] = React.useState(''); // length
    let [filmDensityInput, setFilmDensityInput] = React.useState(''); // density
    let [filmQtyInput, setFilmQtyInput] = React.useState(''); // Qty
    let [filmPriceInput, setFilmPriceInput] = React.useState(''); // Price
    let [filmPreviewAmount, setFilmPreviewAmount] = React.useState(''); // Amount

    // Hook for film
    const newFilmHandler = (e) => {
      if (filmNameInput !== null ) {
        setFilmNewRow([
          ...newFilmRow, 
          { id:newFilmRow.length + 1, name:filmNameInput.id, width:filmWidthInput, thickness:filmThicknessInput, length:filmLengthInput, density:filmDensityInput ,price:filmPriceInput, qty:filmQtyInput, amount:filmPriceInput*filmQtyInput },
        ]);
        setFilmNameInput(null);
        setFilmWidthInput("");
        setFilmThicknessInput("");
        setFilmLengthInput("");
        setFilmDensityInput("");
        setFilmPriceInput("");
        setFilmQtyInput("");
        setFilmPreviewAmount(0)
      }else{
        alert("Please Choose A Raw Type!😔");
      }
    }

    // Film's Amount preview
    const FilmDensityHandler = (e) => {
      setFilmDensityInput(e.target.value);
      setFilmQtyInput(parseFloat(Number(document.getElementById('soloFilmWidth').value) + Number(document.getElementById('soloFilmThickness').value) + Number(document.getElementById('soloFilmLength').value) + Number(document.getElementById('soloFilmDensity').value)).toFixed(2));
    }

    const FilmHandler = (e) => {
        setFilmWidthInput(document.getElementById('soloFilmWidth').value);
        setFilmThicknessInput(document.getElementById('soloFilmThickness').value);
        setFilmLengthInput(document.getElementById('soloFilmLength').value);
        setFilmDensityInput(document.getElementById('soloFilmDensity').value);
        setFilmPriceInput(document.getElementById('soloFilmPrice').value);
        setFilmQtyInput(document.getElementById('soloFilmQty').value);
        setFilmPreviewAmount(document.getElementById('soloFilmPrice').value)
        setFilmPreviewAmount(parseFloat(document.getElementById('soloFilmPrice').value * document.getElementById('soloFilmQty').value).toFixed(2));
    }
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
            <TextField id="soloInkQty" value={inkQtyInput} onChange={(e) => setInkQtyInput(e.target.value)} size="small" color="secondary" label="Qty (Kg)" variant="outlined" />
            <TextField id="soloInkPrice" value={inkPriceInput} onChange={InkRollPriceHandler} size="small" color="primary" label="Unit Price"/>            
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

              value={glueNameInput}
              onChange={(event, newValue) => {
                setGlueNameInput(newValue);
              }}

              renderInput={(params) => <TextField color="primary" {...params} label="Structure" />}
            />
            <TextField id="soloGlueQty" value={glueQtyInput} onChange={GlueHandler} size="small" color="secondary" label="Qty (Kg)" variant="outlined" />
            <TextField id="soloGluePrice" value={gluePriceInput} onChange={GlueHandler} size="small" color="primary" label="Unit Price"/>
            <span id="soloGlueAmount" style={{ padding: 10, fontWeight: 5000 }}>${gluePreviewAmount}</span>
            <a href='#' style={{backgroundColor:"transparent", color: '#139487'}} className='icon-button'>
            <Icon onClick={newGlueHandler} sx={{ fontSize: 40, color:"primary" }}>add_circle</Icon> 
          </a>
        </Stack>
      </TabPanel>
      <TabPanel value={2}>
        <ThinnerInputs newThinnerRow={newThinnerRow} setThinnerNewRow={setThinnerNewRow} />
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

              value={thinnerNameInput}
              onChange={(event, newValue) => {
                setThinnerNameInput(newValue);
              }}

              renderInput={(params) => <TextField color="primary" {...params} label="Structure" />}
            />
            <TextField id="soloThinnerQty" value={thinnerQtyInput} onChange={ThinnerHandler} size="small" color="secondary" label="Qty (Kg)" variant="outlined" />
            <TextField id="soloThinnerPrice" value={thinnerPriceInput} onChange={ThinnerHandler} size="small" color="primary" label="Unit Price"/>
            <span id="soloThinnerAmount" style={{ padding: 10, fontWeight: 5000 }}>${thinnerPreviewAmount}</span>
            <a href='#' style={{backgroundColor:"transparent", color: '#139487'}} className='icon-button'>
            <Icon onClick={newThinnerHandler} sx={{ fontSize: 40, color:"primary" }}>add_circle</Icon> 
          </a>
        </Stack>
      </TabPanel>
      <TabPanel value={3}>
        <FilmInputs newFilmRow={newFilmRow} setFilmNewRow={setFilmNewRow} />
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

              value={filmNameInput}
              onChange={(event, newValue) => {
                setFilmNameInput(newValue);
              }}

              renderInput={(params) => <TextField color="primary" {...params} label="Structure" />}
            />
            <TextField id="soloFilmWidth" value={filmWidthInput} onChange={FilmHandler} size="small" color="primary" label="Width"/>
            <TextField id="soloFilmThickness" value={filmThicknessInput} onChange={FilmHandler} size="small" color="primary" label="Thickness"/>
            <TextField id="soloFilmLength" value={filmLengthInput} onChange={FilmHandler} size="small" color="primary" label="Length"/>
            <TextField id="soloFilmDensity" value={filmDensityInput} onChange={FilmDensityHandler} onInput={(e)=> document.getElementById('soloFilmDensity').value=e.target.value} size="small" color="primary" label="Density"/>
            <TextField id="soloFilmQty" value={filmQtyInput} onChange={FilmHandler} size="small" color="secondary" label="Qty (Kg)" variant="outlined" />
            <TextField id="soloFilmPrice" value={filmPriceInput} onChange={FilmHandler} size="small" color="primary" label="Unit Price"/>
            <span id="soloFilmAmount" style={{ padding: 10, fontWeight: 5000 }}>${filmPreviewAmount}</span>
            <a href='#' style={{backgroundColor:"transparent", color: '#139487'}} className='icon-button'>
            <Icon onClick={newFilmHandler} sx={{ fontSize: 40, color:"primary" }}>add_circle</Icon> 
          </a>
        </Stack>
      </TabPanel>
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
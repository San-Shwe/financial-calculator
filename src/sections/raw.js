import React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Icon from '@mui/material/Icon';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
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

const RawInputs = ({newRow}) => {
  console.log({newRow});

  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      {newRow.map(i => 
          <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={0.5}
          key={i.id }
          sx={{ px: 0.5, py: 0.5, bgcolor: 'background.default' }}
          >
            <Autocomplete
              size="small"
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              options={Structures}
              getOptionLabel={(option) => option.label}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Structure" />}
            />
            <TextField size="small" value={i.name} label="fullWidth" id="fullWidth" />
            <TextField id="meterOrpcs" value={i.price} size="small" color="secondary" label="Meter Or Pcs" variant="outlined" />
            <span style={{ padding: 10, fontWeight: 5000 }}>${i.price}</span>
          </Stack>
        )}
    </div>
  );
}

export default function UnstyledTabsCustomized({newRow, setNewRow}) {
  let id = newRow.length + 1
  const newRowHandler = (e) => {
    setNewRow([
      ...newRow, 
      { id:id, name:"", price:0 }
    ]);
  }

  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Roll Form</Tab>
        <Tab>Bag Form</Tab>
        <Tab>Kg Form</Tab>
      </TabsList>
      <TabPanel value={0}>
        <RawInputs newRow={newRow} />
        <Icon onClick={newRowHandler} sx={{ fontSize: 30 }}>add_circle</Icon>
      </TabPanel>
      <TabPanel value={1}>
      currently unavailable
      </TabPanel>
      <TabPanel value={2}>currently unavailable</TabPanel>
    </TabsUnstyled>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Structures = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];
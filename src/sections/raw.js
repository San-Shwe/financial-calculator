import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// function Ink() {
//   return (
    
//   );
// }

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="INK" {...a11yProps(0)} />
          <Tab label="FILM" {...a11yProps(1)} />
          <Tab label="GLUE" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <Stack 
          direction="row"
          alignItems="left"
          spacing={0.5}
          sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
          >
            <Autocomplete
                size="small" 
                options={Structures}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Structure" />}
            />
            <TextField size="small" label="fullWidth" id="fullWidth" />
            <TextField id="meterOrpcs" size="small" color="secondary" label="Meter Or Pcs" variant="outlined" />
            <Typography style={{ padding: 10, fontWeight: 5000 }}>$0.00</Typography>
        </Stack>
        <Button variant="contained" endIcon={<ThreeDRotation />}>
          Send
      </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <Ink /> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <Ink /> */}
      </TabPanel>
    </Box>
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

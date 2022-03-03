import React from 'react';
import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';

import '../App.css';

export default function finalResult() {
    return (
      // <Stack
      //   direction="row"
      //   alignItems="center"
      //   justifyContent="space-between"
      //   sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
      // >
      //   <Typography style={{ fontWeight: 5000 }}></Typography>
      //   <Typography style={{ fontWeight: 5000 }}>$0.00</Typography>

      // </Stack>
      <div>
        <ul className="cost_list">
          <li className='cost'>
            <span className="cost_lable">Raw Cost : </span>
            <span className="cost_amount">$0 </span>
          </li>
          <li className='cost'>
            <span className="cost_lable">OtherMaterials : </span>
            <span className="cost_amount">$0</span>
          </li>
          <li className='cost'>
            <span className="cost_lable">DirectCost : </span>
            <span className="cost_amount">$0 </span>
          </li>
          <li className='cost'>
            <span className="cost_lable">Indirect Cost : </span>
            <span className="cost_amount">$0</span>
          </li>
          <li className='cost'>
            <span className="cost_lable">Total : </span>
            <span className="cost_amount">$0 </span>
          </li>
          <li className='cost'>
            <span className="cost_lable">Wastage % : </span>
            <TextField id="rollmr" size="small" color="secondary" label="%" variant="outlined" placeholder='0.0'/>
            <span className="cost_amount" id="per_unit_amount">$0</span>
          </li>
          <li className='cost'>
            <span className="cost_lable">SubTotal : </span>
            <span className="cost_amount">$0 </span>
          </li>
          <li className='cost'>
            <span className="cost_lable">Promotion % : </span>
          <TextField id="rollmr" size="small" color="secondary" label="%" variant="outlined" placeholder='0.0'/>
            <span className="cost_amount">$0</span>
          </li>
          <li className='cost'>
            <span className="cost_lable grand_total">GRAND TOTAL : </span>
            <span className="cost_amount">$0 </span>
          </li>
          <li className='cost'>
            <span className="cost_lable per_unit">Per Unit: </span>
            <span className="cost_amount">$0</span>
          </li>
        </ul>
      </div>

    );
  }
import React from 'react';
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';

export default function DirectIndirectCost() {
  return (
    <Stack direction="row" spacing={2} sx={{maxWidth: '100%', width: '100%'}}>            
          <TextField id="direct_cost" fullWidth size="small"  label="Indirect Cost" variant="outlined" />
          <Typography style={{ padding: 10, borderRadius: 10, fontWeight: 5000 }}>$0.00</Typography>
          <Divider orientation="horizontal" flexItem />
          <TextField id="indirect_cost" size="small" label="Direct Cost" variant="outlined" />
          <Typography style={{ padding: 10, borderRadius: 10, fontWeight: 5000 }}>$0.00</Typography>
      </Stack>
  );
}
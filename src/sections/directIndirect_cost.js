import React from 'react';
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';

export default function DirectIndirectCost({directCost, setDirectCost, inDirectCost, setIndirectCost}) {
  return (
    <Stack direction="row" spacing={2} sx={{maxWidth: '100%', width: '100%'}}>            
          <TextField id="direct_cost" value={directCost} onChange={e=>setDirectCost(e.target.value)} size="small"  label="Indirect Cost" />
          <Typography style={{ padding: 10, borderRadius: 10, fontWeight: 5000 }}>${directCost}</Typography>
          <Divider orientation="horizontal" flexItem />
          <TextField id="indirect_cost" value={inDirectCost}  onChange={e=>setIndirectCost(e.target.value)} size="small" label="Direct Cost" />
          <Typography style={{ padding: 10, borderRadius: 10, fontWeight: 5000 }}>${inDirectCost}</Typography>
      </Stack>
  );
}
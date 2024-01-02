import React from 'react';
import { Stack, Typography } from '@mui/material';


const Cancel = () => {
  return (
    <Stack
      sx={{ marginTop: '80px' }}
      align="right"
      spacing={3}
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" gutterBottom textAlign="center" sx={{ '@media (max-width: 640px)': { fontSize: '2rem' } }}>
        Niestety płatność nie powiodła się...
      </Typography>
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ '@media (max-width: 640px)': { fontSize: '1.5rem' } }}>
        Spróbuj ponownie za chwilę
      </Typography>
    </Stack>
  )
}

export default Cancel
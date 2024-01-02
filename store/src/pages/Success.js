
import { Stack, Typography } from '@mui/material';
import React from 'react';

const Success = () => {
  return (
    <Stack
      sx={{ marginTop: '80px' }}
      align="right"
      spacing={3}
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" gutterBottom textAlign="center" sx={{ '@media (max-width: 640px)': { fontSize: '2rem' } }}>
        Dziękujemy za złożenie zamówienia
      </Typography>
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ '@media (max-width: 640px)': { fontSize: '1.5rem' } }}>
        Potwierdzenie prześlemy wiadomością @
      </Typography>
    </Stack>
  );
};

export default Success;
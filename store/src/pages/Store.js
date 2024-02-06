import React from 'react';
import { productsArray } from '../productsStore';
import Box from '@mui/material/Box';
import ProductCard from '../components/ProductCard';

const Store = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Box
        sx={{
          m: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          '@media (min-width: 750px)': {
            justifyContent: 'space-around', flexDirection: 'row',
          },
        }}
      >
        {productsArray.map((product, id) => (
          <ProductCard product={product} key={id} sx={{ flex: '0 0 100%', maxWidth: '100%' }} />
        ))}
      </Box>
    </Box>
  );
};

export default Store;

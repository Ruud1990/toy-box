import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bottom: 0,
        width: '98%',
        backgroundColor: '#fea916',
        textAlign: 'center',
        padding: '10px',
        borderTop: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '10px',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          flexDirection: 'row',
        }}
      >
        <EmailIcon color="primary" />
        <FacebookIcon color="primary" />
        <InstagramIcon color="primary" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          flexDirection: { xs: 'column', md: 'column' },
        }}
      >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
      
          alignItems: 'center',
          gap: { xs: '0', md: '10px' },
        }}
      >
        {new Date().getFullYear()} WYPAKUJ MNIE
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
        
          alignItems: 'center',
          gap: { xs: '0', md: '10px' },
        }}
      >Wszelkie prawa zastrzeżone 
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
         
          alignItems: 'center',
          gap: { xs: '0', md: '10px' },
        }}
      >
        Created by Krzysztof Prońko
      </Typography>
      </Box>
        <Box
        sx={{
          display: 'flex',
          gap: '10px',
          flexDirection: 'row',
        }}
      >
        <Link to="/regulamin" variant="body2"
        color="text.secondary"
        sx={{
      
          alignItems: 'center',
          gap: { xs: '0', md: '10px' },
        }} href="regulamin">Regulamin</Link>
        <Link to="/polityka-prywatności" variant="body2"
        color="text.secondary"
        sx={{
      
          alignItems: 'center',
          gap: { xs: '0', md: '10px' },
        }} href="polityka-prywatności">Polityka prywatności</Link>
      </Box>
    </Box>
  );
};

export default Footer;

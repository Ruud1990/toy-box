import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import backgroundImage from '../img/logo_wypakuj.png';

const Contact = () => {
  return (
    <Box
      sx={{
        marginTop: '40px',
        textAlign: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        borderRadius: '10px',
        opacity: 0.9,
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" sx={{ color: '#fff', backgroundColor: 'rgba(200, 70, 300, 0.5)',  margin: '20px auto', padding: '10px', width: '70%', borderRadius: '5px' }}>Kontakt</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px auto', backgroundColor: 'rgba(200, 70, 300, 0.5)', width: '60%', padding: '10px', borderRadius: '5px' }}>
        <a href="mailto:adres_email@example.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
          <EmailIcon style={{ fontSize: 50, color: '#fff' }} />
        </a>
        <a href="https://www.facebook.com/your_page" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
          <FacebookIcon style={{ fontSize: 50, color: '#fff' }} />
        </a>
        <a href="https://www.instagram.com/your_page" target="_blank" rel="noopener noreferrer">
          <InstagramIcon style={{ fontSize: 50, color: '#fff' }} />
        </a>
      </Box>
      <Typography variant="body1" sx={{ margin: '20px auto', color: '#fff', backgroundColor: 'rgba(200, 70, 300, 0.6)', width: '50%', padding: '10px', borderRadius: '5px' }}>
        kontakt@wypakujmnie.pl
      </Typography>
    </Box>
  );
};

export default Contact;

import emailjs from 'emailjs-com';
import React, { useState, useEffect  } from 'react';
import { styled } from '@mui/system';
import { Container, Typography, TextField, Select, MenuItem, Button } from '@mui/material';
import { useContext } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CartContext } from '../CartContext';
import Link from '@mui/material/Link';
import { pink } from '@mui/material/colors';

const FormContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}));

const FormSection = styled('div')(({ theme }) => ({
  flex: 1,
  minWidth: '300px',
  maxWidth: '400px',
}));

const ContactForm = () => {
  const cart = useContext(CartContext);
 const [formData, setFormData] = useState(() => {
    // get data from sessionStorage
    const storedFormData = sessionStorage.getItem("formData");
    return storedFormData ? JSON.parse(storedFormData) : {
      name: '',
      email: '',
      phone: '',
      childName: '',
      aboutChild: '',
      street: '',
      city: '',
      zipCode: '',
      deliveryMethod: '',
      paczkomatNumber: '',
    };
  });

  useEffect(() => {
    // read data from sessionStorage
    const storedFormData = sessionStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
       console.log('Data loaded from session storage:', JSON.parse(storedFormData));
    }
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handlePayment = async () => {
  let responseClone;
  try {
    const response = await fetch('https://wypakujmnie.pl/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cart.items }),
    });

    // Clone the response to responseClone
    responseClone = response.clone();

    const data = await response.json();
    if (data.url) {
      window.location.assign(data.url);
    }
    console.log(data);
  } catch (error) {
    console.error('Error during payment:', error);

    // Handle JSON parse error and log raw server response
    console.log('Error parsing JSON from response:', error, responseClone);

    // If JSON parse fails, process response body as raw text
    responseClone.text().then((bodyText) => {
      console.log('Received the following instead of valid JSON:', bodyText);
    });

    alert('Error during payment. Please try again later.');
  }
};


  const sendEmail = async (e) => {
    try {
      const emailResult = await emailjs.sendForm(
        'service_1y6slqn',
        'template_7swx1ko',
        e.target,
        'xg03jn4QClfIeBWZV'
      );
      console.log(emailResult.text);
      alert('Email sent successfully!');
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      alert('Error sending email!');
    }
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    await sendEmail(e);
    await handlePayment();

     sessionStorage.removeItem('formData');

    // clear contact form
    setFormData({
      name: '',
      email: '',
      phone: '',
      childName: '',
      aboutChild: '',
      street: '',
      city: '',
      zipCode: '',
      deliveryMethod: '',
      paczkomatNumber: '',
    });
  };

  const handleDeliveryMethodChange = (e) => {
    const { name, value } = e.target;

    if (value === 'Paczkomat InPost') {
      setFormData({ ...formData, [name]: value, paczkomatNumber: '' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

   useEffect(() => {
    // save data to sessionStorage
    sessionStorage.setItem('formData', JSON.stringify(formData));
    console.log('Data saved to sessionStorage:', formData);
  }, [formData]);

  return (
    <FormContainer component="form" maxWidth="lg" onSubmit={handleCheckout}>
      <FormSection>
        <Typography variant="h5">Twoje dane</Typography>
        <TextField name="name" value={formData.name} label="Imię i nazwisko" fullWidth onChange={handleChange} required />
        <TextField name="email" value={formData.email} label="Email" fullWidth onChange={handleChange} required />
        <TextField name="phone" value={formData.phone} label="Telefon" fullWidth onChange={handleChange} required />
      </FormSection>
      <FormSection>
        <Typography variant="h5">Dane dziecka</Typography>
        <TextField name="childName" value={formData.childName} label="Imię dziecka" fullWidth onChange={handleChange} required />
        <TextField name="childInfo" value={formData.childInfo} label="Kilka słów o dziecku" fullWidth onChange={handleChange} required />
      </FormSection>
      <FormSection>
        <Typography variant="h5">Wysyłka</Typography>
        <TextField name="street" value={formData.street} label="Ulica i nr domu" fullWidth onChange={handleChange} required />
        <TextField name="city" value={formData.city} label="Miasto" fullWidth onChange={handleChange} required />
        <TextField name="zipCode" value={formData.zipCode} label="Kod pocztowy" fullWidth onChange={handleChange} required />
        <Select
          name="deliveryMethod"
          value={formData.deliveryMethod}
          onChange={handleDeliveryMethodChange}
          fullWidth
          displayEmpty
          required
        >
          <MenuItem value="" disabled>
            Wybierz sposób dostawy
          </MenuItem>
          <MenuItem value="Kurier InPost">Kurier InPost</MenuItem>
          <MenuItem value="Paczkomat InPost">Paczkomat InPost</MenuItem>
        </Select>
        {formData.deliveryMethod === 'Paczkomat InPost' && (
          <TextField
            name="paczkomatNumber"
            value={formData.paczkomatNumber}
            label="Nr paczkomatu (adres)"
            fullWidth
            onChange={handleChange}
            required
          />
        )}
       <FormControlLabel
      required
      control={
        <Checkbox
          size="small"
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      }
      label={
        <Typography variant="body2" sx={{ fontSize: 10, marginTop: 2 }}>
          Akceptuję <Link href="regulamin">regulamin</Link> oraz{' '}
          <Link href="polityka-prywatności">politykę prywatności</Link> sklepu Fun Box
        </Typography>
      }
    />
      </FormSection>
      <Button type="submit" variant="contained" color="primary">
        Wyślij
      </Button>
    </FormContainer>
  );
};

export default ContactForm;
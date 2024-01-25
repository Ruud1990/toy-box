import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CartContext } from '../CartContext';
import { useContext} from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

const ProductCard = (props) => {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
  return (
    <Card sx={{ minWidth: 225, maxWidth: 450, minHeight: 425, margin: '20px' }} >
      <CardMedia
        sx={{ height: 140, width: '100%' }}
        image={product.img}
        title="box baby picture"
      />
      <CardContent sx={{ maxWidth: 400, textAlign: 'center' }} md={{mx: 'auto'}}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="body5" component="div">
          {product.text}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center'}}>
        { productQuantity > 0 ? 
        <>
         <Box sx={{ width: 200,}} direction="column" justifyContent="center"
  alignItems="center">
      <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap justifyContent="center"
  alignItems="center" flexWrap="wrap">
        <Button variant="outlined" onClick={() => cart.addOneToCart(product.id)}>+</Button>
        <Button variant="outlined" onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
        <Button variant="outlined" color="error" onClick={() => cart.deleteFromCart(product.id)}><i class="fa-solid fa-trash"></i></Button>
      </Stack>
        <Item>Zamawiasz szt. {productQuantity}</Item>
    </Box>
    
        </> : 
        
        <Button size="small" onClick={() => cart.addOneToCart(product.id)}>Zamów</Button>
        }
      </CardActions>
    </Card>
  )
}


export default ProductCard
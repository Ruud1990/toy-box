import Button from '@mui/material/Button';
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'stretch',
                width: 300,
                gap: '20px',
                borderBottom: '1px solid #ccc',
                paddingBottom: '10px',
                marginBottom: '10px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1',
                }}
            >
                <Typography variant="h6">{productData.title}</Typography>
                <Typography variant="body1">{quantity} szt. za:</Typography>
                <Typography variant="body1">{(quantity * productData.price).toFixed(2)} PLN</Typography>
            </Box>
            <ButtonGroup size="small" aria-label="small button group">
                <Button variant="outlined" onClick={() => cart.addOneToCart(productData.id)}>+</Button>
                <Button variant="outlined" onClick={() => cart.removeOneFromCart(productData.id)}>-</Button>
                <Button variant="contained" onClick={() => cart.deleteFromCart(id)}>Usuń</Button>
            </ButtonGroup>
        </Box>
    )
}

export default CartProduct;

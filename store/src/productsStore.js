// price_1OQEoiEYWs5Kjxdw2T5vUKKw    ----   box 1

// price_1OQEpyEYWs5KjxdwBqvhxvJQ    ----   box 2

// price_1OQEqmEYWs5KjxdwXZObROum    ----   box 3

// price_1OQEoiEYWs5Kjxdw2T5vUKKw    ----   wysyłka 





const productsArray = [
    {
        id: 'price_1OcaHDEYWs5KjxdwsH6Vf9NN',
        title: 'Bobas',
        text: 'Zestaw dla najmłodszych w wieku 6-12 miesięcy',
        price: 99.00,
        img: require('./img/Leonardo_Diffusion_XL_6_months_baby_without_hair_with_socks_ca_1.jpg')
    },
    {
        id: 'price_1OcagLEYWs5KjxdwzoO7JGyy',
        title: 'Odkrywca',
        text: 'Zestaw dla małych odkrywców w wieku 1-2 lata',
        price: 99.00,
        img: require('./img/Leonardo_Diffusion_XL_2_years_old_baby_cartoon_style_use_viole_1.jpg')
    },
    {
        id: 'price_1OcaK5EYWs5Kjxdw6JplFlEy',
        title: 'Kreator',
        text: 'Zestaw pobudzający kreatywność dla 3-4 latków',
        price: 99.00,
        img: require('./img/Leonardo_Diffusion_XL_4_years_old_baby_cartoon_style_use_viole_0.jpg')
    },
];

const shipmentArray = [
    {
        id: 'price_1OcaLVEYWs5Kjxdw9DLnbwTa',
        title: 'wysyłka',
        price: 15.00}
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if(productData === undefined) {
        console.log('Product data does not exist for ID ' + id);
        return undefined;
    }

    return productData;
}
function getShipmentData(id) {
    let shipmentData = shipmentArray.find(shipment => shipment.id === id);

    if(shipmentData === undefined) {
        console.log('shipment data does not exist for ID ' + id);
        return undefined;
    }

    return shipmentData;
}

export { productsArray, getProductData, shipmentArray, getShipmentData };
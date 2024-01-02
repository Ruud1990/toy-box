// price_1OQEoiEYWs5Kjxdw2T5vUKKw    ----   box 1

// price_1OQEpyEYWs5KjxdwBqvhxvJQ    ----   box 2

// price_1OQEqmEYWs5KjxdwXZObROum    ----   box 3



const productsArray = [
    {
        id: 'price_1OQEoiEYWs5Kjxdw2T5vUKKw',
        title: 'Bobas',
        text: 'Zestaw dla najmłodszych w wieku 6-12 miesięcy',
        price: 1.99
    },
    {
        id: 'price_1OQEpyEYWs5KjxdwBqvhxvJQ',
        title: 'Odkrywca',
        text: 'Zestaw dla najmłodszych w wieku 1-2 lat',
        price: 2.99
    },
    {
        id: 'price_1OQEqmEYWs5KjxdwXZObROum',
        title: 'Kreator',
        text: 'Zestaw dla najmłodszych w wieku 3-4 lata',
        price: 3.99
    },
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if(productData === undefined) {
        console.log('Product data does not exist for ID ' + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
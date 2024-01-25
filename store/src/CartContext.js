import { createContext, useState, useEffect } from "react";
import { productsArray, getProductData, shipmentArray } from "./productsStore";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState(() => {
    // Pobieranie danych z local storage lub używanie wartości domyślnych
    const storedCartProducts = localStorage.getItem("cartProducts");
    return storedCartProducts ? JSON.parse(storedCartProducts) : [];
  });
    const [hasProducts, setHasProducts] = useState(false);

    useEffect(() => {
        // Odczytaj dane z local storage przy montowaniu komponentu
        const savedCartData = localStorage.getItem("cartData");
        if (savedCartData) {
            setCartProducts(JSON.parse(savedCartData));
            setHasProducts(true);
        }
    }, []);

    // Zapisz dane do local storage po każdej zmianie w koszyku
    useEffect(() => {
        localStorage.setItem("cartData", JSON.stringify(cartProducts));
        setHasProducts(cartProducts.length > 0);
    }, [cartProducts]);

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            setCartProducts([
                ...cartProducts,
                {
                    id: id,
                    quantity: 1,
                }
            ]);
            setHasProducts(true);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                )
            );
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity - 1 }
                            : product
                )
            );
        }
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id !== id;
                })
        );
        setHasProducts(cartProducts.length > 1);
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += productData.price * cartItem.quantity;
        });
        return totalCost;
    }

    useEffect(() => {
    // Zapisywanie danych koszyka do local storage po każdej zmianie
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    setHasProducts(cartProducts.length > 0);
  }, [cartProducts]);
  
    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;

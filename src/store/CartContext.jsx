import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const { Provider } = CartContext;

export function CartContextProvider( {children} ){
    const [cart, setCart] = useState([]);

    const addCart = (item, cant) => {
        const newItem = {...item, cant};
        setCart([...cart, newItem]);
    }


   
    return(
        <Provider value= { {cart, addCart} }>
            {children}
        </Provider>
    )
} 

export default useCartContext;
import { createContext, useEffect, useState } from "react"; // Import React
import { food_list } from "../assets/assets";

// Create context
export const StoreContext = createContext(null);

// Create context provider component
const StoreContextProvider = (props) => {


    const [cartItems,setCartItems] = useState({});


    const addToCart = (itemId) =>{
        // console.log(itemId);
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }


    const removeFromCart = (itemId) => {
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    // Define context value
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    };

    // Return the provider with the context value
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider; // Export context provider component
import React, { createContext } from "react"; // Import React
import { food_list } from "../assets/assets";

// Create context
export const StoreContext = createContext(null);

// Create context provider component
const StoreContextProvider = (props) => {
    // Define context value
    const contextValue = {
        food_list
    };

    // Return the provider with the context value
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider; // Export context provider component
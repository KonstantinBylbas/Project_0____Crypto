import React, { useState } from "react";

export const ThanksContext = React.createContext(null);

export default function ThanksContextProvider({ children }) {

    const [contextThanks, setContextThanks] = useState(false);

    return (
        <ThanksContext.Provider value={{
            contextThanks, setContextThanks
        }} >
            {children}
        </ThanksContext.Provider>
    );
}
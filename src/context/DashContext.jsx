import { createContext, useContext, useState } from "react";

export const DashContext = createContext();

export const DashProvider = ({ children }) => {

    const [active, setActive] = useState("Category");

    return (
        <DashContext.Provider
            value={{
                active,
                setActive
            }}>
            {children}
        </DashContext.Provider>
    )
}

export const useDash = () => useContext(DashContext);
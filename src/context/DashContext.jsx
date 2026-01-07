import { createContext, useContext, useState } from "react";

export const DashContext = createContext();

export const DashProvider = ({ Children }) => {

const [showMenu, setShowMenu] = useState(false);

    return (
        <DashContext.Provider 
        value={{
            showMenu,
            setShowMenu
        }}>
            {Children}
        </DashContext.Provider>
    )
}

export const useDash = () => useContext(DashContext);
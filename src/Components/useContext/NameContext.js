import React, { createContext, useState } from 'react'
const initialvalue = 'Priyabrata'
export const nameContext = createContext();
export function NameContextProvider({ children }) {
    const [name, setName] = useState(initialvalue);
    return (
        <nameContext.Provider value={[name, setName]}>
            {children}
        </nameContext.Provider>
    )
}
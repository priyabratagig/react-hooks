import React, { createContext, useState } from 'react'
const initialvalue = 'Frontend Developer'
export const hobbyContext = createContext();
export function HobbyContextProvider({ children }) {
    const [hobby, setHobby] = useState(initialvalue);
    return (
        <hobbyContext.Provider value={[hobby, setHobby]}>
            {children}
        </hobbyContext.Provider>
    )
}
import React, { useState, createContext } from "react";
import Signin from './page/Signin';
import Sidebar from './component/sidebar/sidebar';

export const AppContext = createContext(null);

const ContextCase1 = () => {
    const token = localStorage.getItem('accessToken');
    const [username, setUsername] = useState("");
    
    return (
        <AppContext.Provider value={{ username, setUsername }}>
            {
                !token ? (
                <Signin/>
                
                ) : (
                <Sidebar />
                )
            }
        </AppContext.Provider>
    );
}

export default ContextCase1;
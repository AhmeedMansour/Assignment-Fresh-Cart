import { createContext, useEffect, useState } from "react";

export let userToken = createContext(null);

export default function UserTokenProvider({children}) {
    let [isLogin, setLogin] = useState(false);  // Default to false for logged-out state

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLogin(true);  // Set to true if token exists
        } else {
            setLogin(false); // Set to false if token does not exist
        }
    }, []);

    // Optional: Function to handle login/logout state
    const login = (token) => {
        localStorage.setItem('token', token);
        setLogin(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setLogin(false);
    };

    return (
        <userToken.Provider value={{ isLogin, setLogin, login, logout }}>
            {children}
        </userToken.Provider>
    );
}

import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "../myBase";

function App(){
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if(user){
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
            setInit(true);
        });
    }, [])
    return(
        <>
            {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..."}
            <footer>&copy; {new Date().getFullYear()} OXmaster</footer>
        </>
    );
}

export default App;
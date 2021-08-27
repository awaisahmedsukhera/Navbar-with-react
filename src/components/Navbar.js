import React, { useState } from "react";
import { postLogInNav, preLogInNav } from "./NavbarItems";

const Navbar= () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
        <>
        {
            !isLoggedIn?<>
            {preLogInNav.map(item=><div>{item.title}</div>)}
            </>:<>{postLogInNav.map(item=><div>{item.title}</div>)}</>
        }
        <input
        type="submit"
        value= {!isLoggedIn? "Log in": "Sign Out"}
        onClick={()=>setIsLoggedIn(!isLoggedIn)}
        />
        </>    
    );   
};

export default Navbar;
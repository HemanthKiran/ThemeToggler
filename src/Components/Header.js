import React from "react"
import ThemeToggler from "./ThemeToggler"


const Header = () => {
    return (
        <header>
            <h1 style={{
                backgroundColor: "grey",
                padding: "20px",
                textAlign: "center",
                margin: " 0 -5px 20px"
            }}>Theme Toggler</h1>
            <ThemeToggler />
        </header>
    )
}
export default Header;




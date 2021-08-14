import React, { useContext } from "react"
import ThemeContext from "../Context/ThemeContext"

const ThemeToggler = () => {
    const [themeMode, setThememode] = useContext(ThemeContext);
    return (
        <div onClick={() => {
            setThememode(themeMode === "light" ? "dark" : "light")
        }}>
            <span style={{
                fontSize: "100px",
                cursor: "pointer"
            }}>{themeMode === "light" ? "💡" : "🌑"}</span>
        </div>
    )



}

export default ThemeToggler;
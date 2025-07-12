import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  // Try to read the last‑used theme from localStorage
  const [dark, setDark] = useState(
    () => JSON.parse(localStorage.getItem("darkTheme")) ?? false
  );

  // Whenever it changes, update <body> class & localStorage
  useEffect(() => {
    document.body.classList.toggle("bg-dark", dark);
    document.body.classList.toggle("text-light", dark);
    localStorage.setItem("darkTheme", JSON.stringify(dark));
  }, [dark]);

  const toggle = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

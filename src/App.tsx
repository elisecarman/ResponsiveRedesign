import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
    useEffect(() => {
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(darkModeMediaQuery.matches);
  
      const handleChange = (event: MediaQueryListEvent) => {
        setIsDarkMode(event.matches);
      };
      darkModeMediaQuery.addEventListener("change", handleChange);
      return () => {
        darkModeMediaQuery.removeEventListener("change", handleChange);
      };
    }, []);
  

  return (

    <Container className={isDarkMode ? "dark-top" : "top"}>
      <NavBar isDarkMode={isDarkMode}/>
      <Outlet context={{ isDarkMode }}/>
    </Container>
  )
}

export default App

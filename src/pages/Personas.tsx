import { useRef, useEffect, useState } from "react";
import '../App.css';
import { Container, Row, Col, Button, Dropdown, DropdownButton, Image, Table, Card, Accordion, AccordionBody, Collapse } from 'react-bootstrap'
import { useOutletContext } from "react-router-dom";

interface OutletContext {
    isDarkMode: boolean;
}

function Personas() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const section7Ref = useRef(null);
    const section8Ref = useRef(null);
    const { isDarkMode } = useOutletContext<OutletContext>();
  
  
    const scrollToSection = (ref: any) => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return(
        <div>
        <Accordion 
        defaultActiveKey="0"
        // data-bs-theme={isDarkMode ? "dark" : "secondary"} 
        style={{
        position: "fixed",
        top: "50%",
        left: "1rem",
        transform: "translateY(-50%)",
        zIndex: 1000,
        margin: "0rem",
        }}
        >
            <Accordion.Item eventKey="0"
            style={{
                backgroundColor: "transparent",
                border: "none"
            }}
            >
            <Accordion.Header 
            style = {{
                // backgroundColor:"#000000"
            }}
            >Sections</Accordion.Header>
            <AccordionBody 
            style={{margin: "0rem", padding: "0rem"}}
            >
                <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section1Ref)} className="w-100 mb-3" style={{ display: "block" }}>
                1
            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section2Ref)} className="w-100 mb-3" style={{ display: "block" }}>
                2
            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section3Ref)} className="w-100 mb-3" style={{ display: "block" }}>
                3
            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section4Ref)} className="w-100 mb-3" style={{ display: "block" }}>
                4
            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section5Ref)} className="w-100 mb-3" style={{ display: "block" }}>
                5
            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section6Ref)} className="w-100 mb-3" style={{ display: "block" }}>
                6
            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section7Ref)} className="w-100 mb-3" style={{ display: "block" }}>
                7
            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section8Ref)} className="w-100 mb-3" style={{ display: "block" }}>
                8
            </Button> 
            </AccordionBody>
            </Accordion.Item>
        </Accordion>
            <div ref={section1Ref} className={isDarkMode ? "dark-section" : "section"}>
                <h1>Personas & Storyboarding</h1>
                <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                    Introduction
                </h5>
            </div>
            <div ref={section2Ref} className={isDarkMode ? "dark-section" : "section"}>
                <h1>Observations</h1>
                <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                    Alec
                </h5>
                <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                    Efia
                </h5>
                <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                    Yesenia
                </h5>
            </div>
            <div ref={section3Ref} className={isDarkMode ? "dark-section" : "section"}>
                <h1>Personas</h1>
                <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                    a persona!
                </h5>
            </div>
            <div ref={section4Ref} className={isDarkMode ? "dark-section" : "section"}>
                <h1>Storyboards</h1>
                <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                    a storyboard!
                </h5>
            </div>
            <div ref={section5Ref} className={isDarkMode ? "dark-section" : "section"}>
                <h1>Conclusion</h1>
                <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                    heck ya
                </h5>
            </div>
        </div>
    )
    
}

export default Personas

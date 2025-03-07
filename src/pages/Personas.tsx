import { useRef, useEffect, useState } from "react";
import '../App.css';
import { Container, Row, Col, Button, Dropdown, DropdownButton, Image, Table, Card, Accordion, AccordionBody, Collapse } from 'react-bootstrap'
import { useOutletContext } from "react-router-dom";
import Callout from "../components/Callout";

import efia from "../assets/personas/efia.png"
import yesenia from "../assets/personas/yesenia.png"
import alec from "../assets/personas/alec.png"
import king from "../assets/personas/king.png"
import mouse from "../assets/personas/mouse.png"
import one from "../assets/personas/1.png"
import two from "../assets/personas/2.png"
import three from "../assets/personas/3.png"
import four from "../assets/personas/4.png"
import five from "../assets/personas/5.png"
import six from "../assets/personas/6.png"
import seven from "../assets/personas/7.png"
import supermarket from "../assets/personas/supermarket.png"





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
    const section9Ref = useRef(null);
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
            Intro
            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section2Ref)} className="w-100 mb-3" style={{ display: "block" }}>
            Interface
            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section3Ref)} className="w-100 mb-3" style={{ display: "block" }}>
            Interview 1
            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section4Ref)} className="w-100 mb-3" style={{ display: "block" }}>
            Interview 2
            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section5Ref)} className="w-100 mb-3" style={{ display: "block" }}>
            Interview 3

            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section6Ref)} className="w-100 mb-3" style={{ display: "block" }}>
            Persona 1
            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section7Ref)} className="w-100 mb-3" style={{ display: "block" }}>
            Persona 2
            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section8Ref)} className="w-100 mb-3" style={{ display: "block" }}>
                Storyboard
            </Button>
            <Button variant={isDarkMode ? "secondary" : "dark"} onClick={() => scrollToSection(section9Ref)} className="w-100 mb-3" style={{ display: "block" }}>
                Conclusion
            </Button> 
            </AccordionBody>
            </Accordion.Item>
        </Accordion>
        
            <div ref={section1Ref} className={isDarkMode ? "dark-section" : "section"}>
                <h1>Personas & Storyboarding</h1>
                <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                    Who are supermarkets made for? Presumably, everybody! 
                    But people have varied schedules, diets, cooking styles, and household sizes! 
                    How can one possibly design an interface to satisfy most, if not all?
                    A gigantic supermarket with every specialty item and every brand is incredible for the avid cook, 
                    but maybe an overstimulating maze for a in-and-out efficient shopper.
                    What sacrifices must be made?<br></br>
                    Let's find out about different user behaviors in supermarkets, and find out more about our user needs!
                </h5>
                
                
            </div>
            <div ref={section2Ref} className={isDarkMode ? "dark-section" : "section"}>
                <h1>The interface</h1>
                    <Row >
                    <Col>
                    <h4 className="mt-4">
                        Our interface here is a supermarket layout. <br/>
                        It's surprisingly universal! <br/>
                        You'll usually encounter the following elements
                    </h4>
                        <Image src={supermarket}/>
                    </Col>
                    <Col md={4}>
                    
                    <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                        - A produce section. It's always at the entrance. 
                        It's the most challenging section: produce moves around, changes seasonally, runs out. 
                        Shoppers get the most mentally exhausted while shopping for produce.
                        Because of its disorganized and busy nature, the produce section isn't an aisle but mostly an open space with stands. 
                    </h5>
                    <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                        - Special displays at the aisle ends. This allows stores to introduce new products and deals without disrupting their shoppers' flow.
                    </h5>
                    <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                        - Sweets, treats, snacks, and more special displays are usually close to checkout. 
                        Shoppers are most mentally exhausted and thus vulnerable to temptation at the end of their trip.
                    </h5>
                    <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                        - Finally, the dairy and meats aisles always run along the walls.
                    </h5>
                    </Col>
                </Row>
            </div>
            <div ref={section3Ref} className={isDarkMode ? "dark-section" : "section"}>
                <Row>
                    <Col md={4}>
                    <h1>Yesenia</h1>
                    <Image style={{maxHeight:"600px"}} fluid src={yesenia}></Image>
                    </Col>
                    <Col>
                    <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                        Behavior <br/><br/>
                        Yesenia shopped at Trader Joe's on a Sunday morning. The store was bustling, but well provisioned. 
                        She snaked through the entire store, not missing a single aisle. 
                        She in particular walked up and back down the frozen aisle food, scanning one side at a time.
                        She did not look at her grocery list until the very end of her trip.
                        She moved through the store systematically and with efficiency. She explored avery single aisle.
                        She did not retrace her steps at any point for forgotten items, but she did redirect the flow of her path twice to avoid busy avenues. 
                        She meandered a bit more in the produce section, and briefly struggled to find mint. She was not tempted by any of the special temporary displays.
                    </h5>
                    <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                        Yesenia loves cooking and grocery shopping. 
                        She loves being in control of her diet- for her the grocery store is a gallery of choices.
                        She has essentials she know to buy, but likes giving herself the opportunity to go off script. 
                        She'll walk through every aisle to see about new items.
                        She'll check out both sides of the frozen foods section carefully because the items move around a lot. 
                        She likes giving herself access to her favorite foods by cooking: This week she's making Mexican meatballs, a home favorite.                         
                        She makes both prep intensive dinners ( a lot of soup) and quick frozen foods dinners. 
                        She tends to grocery shop once a week. Trader Joe's is a convenient short walk away for her.
                    </h5>
                    </Col>
                </Row>
                
            </div>
            <div ref={section4Ref} className={isDarkMode ? "dark-section" : "section"}>
                
                <Row>
                    <Col md={4}>
                    <h1>Efia</h1>
                    <Image style={{maxHeight:"600px"}} fluid src={efia}></Image>
                    </Col>
                    <Col>
                    <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                        Behavior <br/><br/>
                        Efia shopped at Trader Joe's around 8pm on a Tuesday night. 
                        The store had few customers, and the store seemed low on produce. 
                        She checked her grocery list several times throughout the trip, and spent the majority of the time in the produce section.
                        She traveled back and forth from shelf to shelf in the produce section, and struggled to find certain items: 
                        they had for example run out of Bok Choi and the green onions looked old. The store had also run out of high protein tofu.
                        
                        The produce she chose she put directly in her basket without plastic bags.
                        After selecting her produce, Efia semi snaked through the remaining aisles.
                        She skipped certain sections entirely, and found her remaining items in much less time. She explore about 3/4 of the store's aisles
                        She was tempted by one of the displays at the end of the aisle. She also grabbed a bar of dark chocolate before reaching checkout.
                    </h5>
                    <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                        Efia spends a lot of time cooking. 
                        During her runs she buys mostly produce, and she'll shop once to twice a week. 
                        She has go to recipes, but this week she has two new recipes she's excited about: Mango Curry and [].
                        Efia follows a vegan diet, and does olympic powerlifting. 
                        Trader Joe's does not always have everything she needs, but she goes there for convenience.
                        Efia's go to quick meal is canned lentil soup, instead of anything frozen.
                        One of the things Efia loves more about grocery shopping is coming home with beautiful produce.
                        She doesn't put it in bags because it "kills the vibe".
                    </h5>
                    </Col>
                </Row>
            </div>
            <div ref={section5Ref} className={isDarkMode ? "dark-section" : "section"}>
                <Row>
                    <Col md={4}>
                    <h1>Alec</h1>
                    <Image style={{maxHeight:"600px"}} fluid src={alec}></Image>
                    </Col>
                    <Col>
                    <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                        Behavior <br/><br/>
                        Alec shopped at Shaw's on a Sunday around 5pm.
                        The very large supermarket did not appear particularly busy. 
                        Alec only checked his grocery list at the very end of the trip.
                        He started in the produce section and traveled back and forth a bit there. 
                        Eventually Alec semi snaked through the rest of the store. 
                        He did not backtrack for a single item, and did not have to redirect his course due to obstacles. 
                        He explored a 1/4 of the store's aisles, before swinging by the pastries and sweets section before checkout.
                        He pointed out a box of brownies he loves, but did not buy it.
                    </h5>
                    <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                        Alec does not cook as much this semester. 
                        He's on partial meal plan, and is looking for items to make good breakfasts, snacks, and sometimes fix dinner. He'll go grocery shopping about every 2 weeks.
                        He prefers Shaw's because of its large frozen fruit selection which he uses for his smoothies. 
                        He also loves the brand options, something Trader Joe's does not have.
                        Thanks to his car, going to Shaw's only takes 15 minutes. 
                        Alex does not have an intense list when shopping: he tends to buy the same things, and he has an idea of what he wants this week.
                        He expected to buy relatively little on this trip, but unexpectedly walked out with two bags.

                    </h5>
                    </Col>
                </Row>
            </div>
            <div ref={section6Ref} className={isDarkMode ? "dark-section" : "section"}>
                <h1>The king of the playground</h1>
                <Row>
                    <Col md={2}>
                    </Col>
                    <Col md={2}>
                    <div className="block">I have a good idea what I want to cook this week.</div>
                    <div className="block">I wonder what seasonal produce and foods they have though!</div>
                    </Col>
                    
                    <Col md={4}>
                    <Image style={{maxHeight:"450px"}} fluid src={king}></Image>
                    </Col>
                    <Col md={2}>
                        <div className="block-2">Excited to try out new things.</div>
                        <div className="block-2">Satisfied they know most of the store layout</div>
                        <div className="block-2">Wishes the special displays showed less snacks and more interesting cooking items</div>

                    </Col>
                    <Col md={2}>
                        <div className="block-2">Wishes the produce wouldn't switch around so much</div>
                        <div className="block-2">Wishes there were a few more options available for their recipes</div>
                        <div className="block-2">Feel in control</div>

                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                    </Col>
                    <Col md={2}>
                    <div className="block-2">I'll have the time to wander and peruse!</div>
                    </Col>
                    <Col md={2}>
                    <div className="block-2">Maybe I should have come at a less busy time, people are in my path</div>
                    <div className="block-2">I brought a list just in case.</div>

                    </Col>
                    <Col md={2}>
                    <div className="block">Surprisingly does not look much at the special displays</div>
                    <div className="block">This grocery trip is part of their routine. They blocked the time, and take the time to go through the whole store.</div>
                    </Col>
                    <Col md={2}>
                    
                    <div className="block">Somehow shops in record time despite perusing </div>
                    <div className="block">Have a clear idea where most usual products are</div>           
                    </Col>
                    <Col md={2}>
                    <div className="block">Spend a bit more time than they would like finding produce</div>           
                           
                    </Col>
                </Row>

            </div>
            <div ref={section7Ref} className={isDarkMode ? "dark-section" : "section"}>
            <h1>The mouse</h1>
            <Row>
                    <Col md={2}>
                    <div className="block">I want a little snack</div>
                    </Col>
                    <Col md={2}>
                    <div className="block">I'm not planning to buy much today</div>
                    </Col>
                    <Col md={4}>
                    <Image fluid src={mouse}></Image>
                    </Col>
                    <Col md={2}>
                    <div className="block-2">Wishes it was less crowded today</div>
                    </Col>
                    <Col md={2}>
                    <div className="block-2">Does not know the whole store, but just enough to get in and out efficiently</div>
                    <div className="block-2">Stressed they'll make it on time to their next commitment</div>

                    </Col>
            </Row>
            <Row>
                <Col md={2}>
                <div className="block-2">I'll just be in and out, and won't buy much</div>
                </Col>
                <Col md={2}>
                <div className="block-2">I'm not 100% sure what I have at home</div>
                </Col>
                <Col md={2}>
                <div className="block-2">Honestly if they moved this item around I wouldn't go looking for it</div>
                </Col>
                <Col md={2}>
                <div className="block">Ends up buying more than expected</div>
                </Col>
                <Col md={2}>
                <div className="block">Gets tempted by the special offers and sweet treats</div>
                </Col>
                <Col md={2}>
                <div className="block">Shop irregularly, whenever possible. They're not mentally ready to spend a lot of time shopping.</div>      
                </Col>
            </Row>

            </div>
            <div ref={section8Ref} className={isDarkMode ? "dark-section" : "section"}>
                <h1>Storyboards</h1>
                <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                    The king of the playground
                </h5>
                <Row>
                    <Col>
                    <Image src={one}></Image>
                    <h5 className="callout">
                        The king of the playground enters the super market, reusable bag in one hand, list in the other.
                    </h5>
                    </Col>
                    <Col>
                    <Image src={two}></Image>
                    <h5 className="callout">
                        They tackle the produce section first. This part is the most challenging for most:
                        The produce moves around and is sometimes unavailable or old. Hard to stick to plan!
                    </h5>
                    </Col>
                    <Col>
                    <Image src={three}></Image>
                    <h5 className="callout">
                        Phew, produce is over. Onto the frozen food section! This also changes around a lot. Let's scan carefully. 
                        They see a bag of frozen vegetables they haven't tried yet!
                    </h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Image src={four}></Image>
                    <h5 className="callout">
                        Darn, a worker is restocking this next aisle and it's quite busy too. They'd rather keep things moving and keep things moving.
                    </h5>
                    </Col>
                    <Col>
                    <Image src={five}></Image>
                    <h5 className="callout">
                        Alright, we just got 3 more aisles to go. Swinging by the spices reminds them their household is running out of salt. 
                        They also see a bread their friend recommended.
                    </h5>
                    </Col>
                    <Col>
                    <Image src={six}></Image>
                    <h5 className="callout">
                        Last step: did we forget anything? Likely not, but we check the list.
                    </h5>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Image src={seven}></Image>
                    <h5 className="callout">
                        They skip over the appealing sweats and other snacks at checkout, and pay!
                    </h5>
                </Col>
                <Col></Col>
                <Col></Col>
                </Row>
            </div>
            <div ref={section9Ref} className={isDarkMode ? "dark-section" : "section"}>
                <h1>Conclusion</h1>
                <h5 className={isDarkMode ? "dark-callout" : "callout"}>
                    heck ya
                </h5>
            </div>
            
        </div>
    )
    
}

export default Personas

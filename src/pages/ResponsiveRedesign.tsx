import { useRef } from 'react'
import '../App.css';
import Callout from '../components/Callout';
import Section from '../components/Section';
import Navigation from '../components/Navigation';
import Page from '../components/Page';
import { useOutletContext } from 'react-router-dom';

interface OutletContext {
    isDarkMode: boolean;
}

function ResponsiveRedesign() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    const refs = [
        section1Ref,
        section2Ref
    ]
    const titles = [
        "Intro",
        "Chosen website"
    ]

    
    const { isDarkMode } = useOutletContext<OutletContext>();

  return (
    <div className={isDarkMode? "dark-theme": ""}>
    <Page>
        <Navigation refs={refs} titles={titles}/>
        <Section ref={section1Ref}>
            <h1>Responsive Redesign</h1>
            <Callout>
                A successful website must cater to varied users, including their varied devices. 
                We face the challenge of presenting most, if not all, of the same information to wide monitor and phone users.
                Let's take on this challenge and give some lucky website some love!
            </Callout>

            <h3 style={{marginTop: '4rem'}}>Bee's Thai Cuisine</h3>
            <Callout>
                I chose to redesign Bee's Thai Cuisine's website, specifically their menu page.
                Bee's Thai Cuisine is my favorite restaurant in Providence, and my go to on empty fridge days. It's welcoming, delicious, and affordable!
                <a style={{textDecoration: "none"}} href='https://www.beesthaicuisine.com/menu'> Visit their website here!</a>
            </Callout>
        </Section>
        <Section ref={section2Ref}>
            

            <h4>Mmmh, no matter how delicious, it seems there are a few issues with their menu page</h4>
            
                
                <h3>Efficiency</h3>
                <Callout>
                Navigating this website is difficult. 
                It’s alright on a computer, but is much more inefficient on a phone, which realistically is how most customers would access this business’s website
                The menu in particular causes a lot of issues on a phone: You have to scroll forever through it, one item at a time. 
                Adding buttons to jump around sections would be hugely helpful. 
                Both on the computer and on the phone, there is no way for the user to determine at a glance whether they’d enjoy the food. 
                Instead a disclaimer about various store policies is the first thing that appears (food allergies, diet restrictions adaptability, party of 6 gratuity charge, not BYOB)
                It’s however unadvisable to have any important information at the very end of the page considering how much scrolling is involved: most users will never get to it

                </Callout>
                
                
                <h3>Memorability</h3>
                <Callout>
                The functionality of the navigation bar breaks convention and degrades memorability. 
                Two of the items lead to separate pages, while the third leads to the bottom of one of the same pages. 
                It would be a more logical and memorable user flow to be led to a whole different page.
                </Callout>
                
                
                <h3>Learnability</h3>
                <Callout>
                The food markers (spicy, mild, not spicy, vegetarian, vegan) do not have any explicit definition at the moment. 
                Adding a tooltip would improve Learnability
                </Callout>
                
                
                <h3>WebAIM WAVE</h3>
                <Callout>
                Several low contrast issues with headers
                Several items should have been headers
                Aria tab index is implemented which is good
                Alternative text is present for images
                Some good structure: heading elements, footer, 
                </Callout>
                
            
        </Section>
        
    </Page>
    </div>
  )
}

export default ResponsiveRedesign
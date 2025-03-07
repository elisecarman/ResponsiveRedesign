import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface NavBarProps {
    isDarkMode: boolean;
}

function NavBar({ isDarkMode }: NavBarProps) {

    return(
        <Navbar className={isDarkMode ? 'navbar-dark dark-navbar fixed-top' : 'navbar fixed-top'}>
            <Navbar.Brand className={isDarkMode ? "dark-navbar-items" : "navbar-items"} as={Link} to='/InteractionDesign-New/AccessibleComponent'>
            {/* Home */}
            </Navbar.Brand>
            <Nav className='ms-auto'>
                <Nav.Link as={Link} to='/InteractionDesign-New/AccessibleComponent'>
                    Accessible Components
                </Nav.Link>
                <Nav.Link as={Link} to = '/InteractionDesign-New/PersonasStoryboarding'>
                    Personas & Storyboarding
                </Nav.Link>
            </Nav>


        </Navbar>
    )
    
}

export default NavBar

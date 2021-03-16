import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {IoMdSearch} from 'react-icons/io'
import { animateScroll as scroll } from 'react-scroll'
import Logo from '../../assets/images/logo.png'
import { 
    Nav,
     NavContainer, 
     NavLogo, 
      MobileIcon, 
      NavMenu, 
      NavItem, 
      NavLinks,
      NavBtn,
      NavBtnLink,
      NavGroup
     } from './NavbarElements'

const Navbar = ({toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80 ){
            setScrollNav(true); 
        }else{
            setScrollNav(false);

        }

    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <IconContext.Provider value={{color: '#000'}} >
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavGroup>
                    <NavLogo to="/" onClick={toggleHome}>
                        <img src={Logo} alt="" height="60px" width="150px"/>
                    </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='Home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                            
                            >HOME</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='ABOUT US'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                            >ABOUT US</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='PORTFOLIO'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                            >PORTFOLIO</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='NEWS'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                            >NEWS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/location'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                            >LOCATION</NavLinks>
                        </NavItem>
                    </NavMenu>
                    </NavGroup>
                   
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                   
                   <NavGroup>
                   <NavMenu>
                   <NavItem>
                            <NavLinks to='Home' 
                            ><IoMdSearch style={{fontSize:'25px', color: '#808080',
                             marginRight: '-15px'}}/></NavLinks>
                    
                        </NavItem>
                        <NavItem>
                <NavLinks to='Home'>LOGIN</NavLinks>
                            </NavItem>
                   </NavMenu>
                       
                   <NavBtn>
                            <NavBtnLink to='/login'>SIGN UP</NavBtnLink>
                    </NavBtn>
                   </NavGroup>
                </NavContainer>
            </Nav>
            </IconContext.Provider>
    )
}

export default Navbar

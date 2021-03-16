import React from 'react';
// import { FaTimes } from 'react-icons/fa';
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SideBtnWrap,
    SidebarLink,
    SidebarMenu,
    SidebarRoute
  } from './SidebarElements'

const Sidebar = ({isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to='about'>
                        HOME
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to='discover'>
                        ABOUT US
                    </SidebarLink>
                    <SidebarLink  onClick={toggle}to='services'>
                        PORTFOLIO 
                    </SidebarLink>
                    <SidebarLink  onClick={toggle}to='services'>
                        NEWS 
                    </SidebarLink>
                    <SidebarLink  onClick={toggle}to='services'>
                        LOCATION 
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to='signup'>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={toggle} to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

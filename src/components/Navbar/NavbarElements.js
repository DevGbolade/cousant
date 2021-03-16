import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  /* background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")}; */
  background: whitesmoke;
  height: 60px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  /* max-width: 1100px; */
`;

export const NavGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavLogo = styled(LinkR)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  img {
    margin-bottom: 10px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    font-size: 1.8rem;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 60px;
`;
export const NavLinks = styled(LinkS)`
  color: #3480eb;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  padding: 0 3rem;
  text-align: center;
  border-radius: 5px;
  background: #005ce6;
  white-space: nowrap;
  padding: 10px 30px;
  color: #fff;
  font-size: 13px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s all-ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s all-ease-in-out;
    color: #010606;
    background: #fff;
  }
`;

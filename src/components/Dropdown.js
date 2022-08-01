import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 60%;
height: 100%;
background: #A79752;
display: grid;
align-items: center;
top: 0;
right: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen}) => (isOpen ? '1' : '0')};
right: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

const CloseIcon = styled(FaTimes)
`
color: #000d1a;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 4rem;

@media screen and (max-width: 480px) {
 grid-template-rows: repeat(4, 60px);
}
`;

const MenuLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
cursor: pointer;
transition: 0.2 ease-in-out;

&:hover {
  color: #000d1a;
}
`;

const BtnWrap = styled.div`
display: flex;
justify-content: center;
`;

const NavBtn = styled(Link)`
background: #000d1a;
 color: #fff;
 padding: 16px 30px;
 font-size: 20px;
 white-space: nowrap;
 outline: none;
 transition: 0.3s;
display: flex;
justify-content: center;

&:hover {
 transform: translateY(-2px);
`

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
      <DropdownWrapper>
          <DropdownMenu>
            <MenuLink to='/'>About</MenuLink>
            <MenuLink to='/'>Homes</MenuLink>
            <MenuLink to='/'>Contact</MenuLink>
          </DropdownMenu>
          <BtnWrap>
            <NavBtn to="/login-register">
              Login or Register
            </NavBtn>
          </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown
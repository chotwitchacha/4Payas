import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import * as IconName  from "react-icons/vsc";

const Nav = styled.div`
  background: #F3F6FB;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;



const NavbarHeader = (props) => {
    const {  sidebarOpen, setSidebarOpen } = props;

    console.log(sidebarOpen);
    return (
        <IconContext.Provider value={{ color: '#153D77' }}>
            <Nav> 
                {sidebarOpen 
                ? <img src='/logo-nav.png' alt="" />
                
                : <Button onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <img src='/logo-nav.png'/>
                    </Button>
    
                }
                
            </Nav>
        </IconContext.Provider>
    );

};

export default NavbarHeader;
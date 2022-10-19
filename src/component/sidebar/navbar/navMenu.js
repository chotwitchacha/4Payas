import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './navBar.css'

const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 40px;
  font-size: 17px;
  font-family: 'Prompt', sans-serif;

  &:hover {
    background: rgba(217, 217, 217, 0.6);
    border-left: 4px solid #153D77;
    cursor: pointer;
  }
  
  &:visit {
    background: #D9D9D9;
    border-left: 4px solid #153D77;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #FFFFFF;
  height: 40px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  color: black;
  font-size: 17px;
  font-family: 'Prompt', sans-serif;

  &:hover {
    cursor: pointer;
    border-left: 4px solid #153D77;
    color: #153D77;
  }

  &:visit {
    background: #black;
    border-left: 4px solid #153D77;
  }
`;

const Menu = styled(Link)`
  margin-left: 16px;
`;

const NavMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          <span className='sideBarIcon'>{item.icon}</span>
          {/* {item.icon} */}
          <SidebarLabel className='sideTextcoler'>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel><Link className='sideTextcoler' to={item.path}>{item.title}</Link></SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default NavMenu;
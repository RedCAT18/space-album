import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LIST } from './NavList';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: fixed;
  right: 40px;
  top: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Navs = styled.ul`
  margin: auto;
  padding: 0;
  list-style: none;
`;

const List = styled.li`
  margin: 10px 0;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 100;
  color: black;
  &:active {
    transform: scale(0.98);
    color: black;
  }
  &:hover {
    background-color: #e9e9e9;
  }
`;

const Nav = () => {
  const navs = NAV_LIST;
  return (
    <Container>
      <Navs>
        {navs.map(nav => (
          <List key={nav.id}>
            <Link to={nav.path}>{nav.name}</Link>
          </List>
        ))}
      </Navs>
    </Container>
  );
};

export default Nav;

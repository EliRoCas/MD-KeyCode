import React from 'react';
import Nav from "../components/organisms/Nav";

// Header component is rendering a Nav component (organism), and 'list' prop is passed 
// to the Nav component using the {list} syntax. In this way, the nav component can iterate this prop. 
// see THEORY.md - lines 1 - 31
const Header = ({list}) => {
    return (
        <header>
            <Nav list={list}/>
        </header>
    );
}

export default Header;
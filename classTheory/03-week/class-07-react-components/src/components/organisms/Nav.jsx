import React from 'react';
import List from "../components/molecules/List";
import Logo from "../components/atoms/Logo";

const Nav = ({list}) => {
    return (
        <nav>
            <Logo />
            <List list={list}/>
        </nav>
    );
}

export default Nav;
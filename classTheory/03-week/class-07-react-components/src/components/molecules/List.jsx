import React from 'react';
import ItemList from '../atoms/itemList';

const List = ({ list }) => {
    const elementsList = list.map((item, index) => {
        return <ItemList url={item.url} text={item.text} />
    });

    return (
        <ul> {elementsList}</ul>
    );

    // This is a 'direct' or traditional way to do, without iterating over the items. 
    // <ul>
    //     <ItemList url="./Page.jsx" text="Home"></ItemList>
    //     <ItemList url="./Store.jsx" text="Store"></ItemList>
    // </ul>
}

export default List;
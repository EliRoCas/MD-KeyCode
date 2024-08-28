import React from 'react';

const ItemList = ({ url, text }) => {
    return (
        <>
            < li className='personalizedName'>
                <a href="{url}">{text}</a>
            </li >
        </>
    );
}

export default ItemList;
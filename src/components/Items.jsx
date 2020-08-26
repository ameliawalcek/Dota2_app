import React from 'react';
import { observer, inject } from 'mobx-react'
import Item from './Item';

const Items = inject("itemStore")(observer((props) => {

    const displayItems = () =>{
        return props.itemStore.itemDetails.map(item => <Item item={item[1]} /> || [])
    }
    return (
        <div>
            {displayItems()}
        </div>
    )
}))

export default Items;
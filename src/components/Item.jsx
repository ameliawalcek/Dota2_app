import React from 'react';

function Item(props) {
    console.log(props.item)
    let {item} = props
    return (
        <div>
            <img src={`http://cdn.dota2.com/apps/dota2/images/items/${item.img}`} alt=""/>
            <div>{item.dname}</div>
            <div>{item.created}</div>
            <div>{item.cost}</div>
            <div>{item.attrib}</div>
            <div>{item.components}</div>
            <div>{item.desc}</div>
            <div>{item.lore}</div>
            <div>{item.mc}</div>
            <div>{item.notes}</div>
            <div>{item.qual}</div>
        </div>
    )

}

export default Item;
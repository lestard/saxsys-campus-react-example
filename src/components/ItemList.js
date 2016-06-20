import React from 'react'
import Item from './Item'

const ItemList = ({items}) => (
    <div>
        <ul>
            {items.map(i => (
                <li key={i.id}>
                    <Item text={i.text}/>
                </li>
            ))}
        </ul>
    </div>
)

export default ItemList

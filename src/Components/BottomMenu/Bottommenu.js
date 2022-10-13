import React from 'react'


const MenuComponent = (props) => {
    return <li className={props.isHome ? 'active' : ''}>
        <a href={props.link}>
            <span className={'icon'}>{props.icon}</span>
        </a>
    </li>
}

export default MenuComponent
import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

const items = ['','About', 'Meetups', 'Contact'];

const headerStyle = {
   background: '#3aafa9'
}

const HeaderComponent = () => {
    const navItems = items.map((item, i)=>{
        return (
            <NavItem href={'/' + item.toLowerCase()} key={i}>
                {item ? item: 'Home'}
            </NavItem>
        )
    })

  return (
        <Navbar style={headerStyle} brand='Code Seoul' left>
            {navItems}
        </Navbar>
    )
}

export {HeaderComponent};
import React, { useState } from 'react'
import { NavBar, NavLogo, NavMenu, NavList, NavLink, Bars } from '../styles/styledElementsNav'


function Nav() {

    const [show, setShow] = useState(false);
    console.log(show);
    return (
        <>
            <NavBar show={show} style={{
                position: 'fixed',
                top: '0',
                zIndex: '50',
                width: '100%'
            }} >
                <Bars onClick={() => setShow(!show)} />

                <NavLogo to='/' show={show}>
                    Sahathaya T.
                </NavLogo>
                <NavMenu show={show}>
                    <NavList>
                        <NavLink to='/'>
                            Visa Card (1)
                        </NavLink>
                    </NavList>
                    <NavList>
                        <NavLink to='/VisaCard2'>
                            Visa Card (2)
                        </NavLink>
                    </NavList>
                    <NavList>
                        <NavLink to='/RobotWalk'>
                            Robot Walk
                        </NavLink>
                    </NavList>
                </NavMenu>
            </NavBar>
        </>
    )
}

export default Nav
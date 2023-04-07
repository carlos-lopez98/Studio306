import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsCart4 } from 'react-icons/bs'


function Navbar() {
    return (
        <div className="navbar">
            <div className="title">Studio306.</div>

            <RxHamburgerMenu />
            <BsCart4 />
        </div>
    )
}

export default Navbar

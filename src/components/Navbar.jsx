import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsCart4 } from 'react-icons/bs'


function Navbar() {
    return (
        <div className="navbar">
            <div className="title">Studio306</div>

            <div className="menu">
                <RxHamburgerMenu />
                <BsCart4 />
            </div>

        </div>
    )
}

export default Navbar

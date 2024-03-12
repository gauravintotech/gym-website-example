import React from 'react';

function Header() {
    return (
        <div id= 'main'>
            <div className='header-heading'>
                <h2>"Unleash Your Potential,</h2>
                <h1><span> Transform </span>Your Body</h1>
                <p className='details'>Push yourself because no one else is going to do it for you.</p>
                <div className="header-btns">
                    <a href="#Home" className='header-btn'>Explore More</a>
                </div>
            </div>
            <div id='main'></div>
        </div>
    );
}

export default Header;

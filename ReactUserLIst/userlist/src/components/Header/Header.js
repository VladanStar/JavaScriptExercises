import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
        <h1 className='Header__title'>React Users</h1>
        {/* <button  onClick={() => {
         showUser(user.id);
        }}>Click Me</button> */}
        </div>
    )
}

export { Header };
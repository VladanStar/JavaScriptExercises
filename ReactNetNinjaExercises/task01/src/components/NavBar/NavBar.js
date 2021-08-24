import React from 'react';

const NavBar = ()=>{
    return(
        <nav className="navbar">
            <h1>The React The Net Ninja Exercises</h1>
            <div className="link">
                <a href="/">Home</a>
                <a href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }} >New Blog</a>

            </div>

        </nav>
    )
}
    export default NavBar;
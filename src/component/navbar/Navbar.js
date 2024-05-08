import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    state = {
        clicked: false
    };

    handleClicked = () => {
        this.setState((prevState) => ({ clicked: !prevState.clicked }));
    };

    render() {
        return (
            <div>
                <nav className={`navitem ${this.state.clicked ? 'active' : ''}`}>
                    <div className='logo'>
                        <h1>DA</h1>
                        <h3>Smart Homes</h3>
                    </div>

                    <div className='menu-icons' onClick={this.handleClicked}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                    <ul className={`nav-menu ${this.state.clicked ? 'active' : ''}`}>
                        <li className='nav-links'><a href='/'><i className="fa-solid fa-magnifying-glass"></i></a></li>
                        <li className='nav-links'><a href='/'><i className="fa-regular fa-heart"></i></a></li>
                        <li className='nav-links'><a href='/'><i className="fa-regular fa-basket-shopping"></i></a></li>
                        <li className='nav-links'><a href='/'><i className="fa-solid fa-user"></i></a></li>
                        <li className='nav-links'><a href='/'><i className="fa-solid fa-gift"></i></a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;


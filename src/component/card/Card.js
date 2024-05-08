import React, { Component } from 'react';
import './card.css'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false, // Initially dropdown 1 is closed
      isOpen2: false, // Initially dropdown 2 is closed
      isOpen3: false, // Initially dropdown 3 is closed
    };
  }

  toggleDropdown = (dropdownNumber) => {
    // Toggle the state of the specified dropdown to open/close
    this.setState((prevState) => ({
      [`isOpen${dropdownNumber}`]: !prevState[`isOpen${dropdownNumber}`],
    }));
  };

  render() {
    return (
      <div className='cards-card'>
        <div className="dropdown">
          Get Ideas
          <button onClick={() => this.toggleDropdown(1)} className="dropdown-toggle">
            {this.props.buttonText}
            <i class="fa-solid fa-caret-down"></i>
          </button>
          {this.state.isOpen1 && (
            <ul className="dropdown-menu">
              {/* Render dropdown items */}
              <li className="dropdown-item">Kitchen</li>
              <li className="dropdown-item">Living</li>
              <li className="dropdown-item">Home Office</li>
              <li className="dropdown-item">Bedroom</li>
            </ul>
          )}
        </div>

        <div className="dropdown">
          Shop Products
          <button onClick={() => this.toggleDropdown(2)} className="dropdown-toggle">
            {this.props.buttonText}
            <i class="fa-solid fa-caret-down"></i>
          </button>
          {this.state.isOpen2 && (
            <ul className="dropdown-menu">
              {/* Render dropdown items */}
              <li className="dropdown-item">Gift Idea</li>
              <li className="dropdown-item">Kitchen</li>
              <li className="dropdown-item">Storage</li>
              <li className="dropdown-item">Bed's </li>
            </ul>
          )}
        </div>

        <div className="dropdown">
          About Us
          <button onClick={() => this.toggleDropdown(3)} className="dropdown-toggle">
            {this.props.buttonText}
            <i class="fa-solid fa-caret-down"></i>
          </button>
          {this.state.isOpen3 && (
            <ul className="dropdown-menu">
              {/* Render dropdown items */}
              <li className="dropdown-item">About Us</li>
              <li className="dropdown-item">Contact Us</li>
              <li className="dropdown-item">Place Orders</li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Card;


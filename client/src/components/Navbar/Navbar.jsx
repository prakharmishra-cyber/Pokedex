import React from 'react';
import './Navbar.css';
import image1 from '../../images/Pokeball_icon-icons.com_67448.png';

const Navbar = () => {
    return (
        <div className="nav_header">
            <img src={image1} width={50} height={50} alt="poke_ball_image"/>
            <div className='nav_title'>Pokedex</div>
        </div>
    )
}

export default Navbar

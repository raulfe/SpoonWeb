import React from 'react';
import Button from '@mui/material/Button';
import '../Styles/Navbar.css';

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='menu'>
                <Button variant="text" style={{color:"white",textTransform:"none",marginRight:"10%",fontSize:"20px"}}>Inicio</Button>
                <Button variant="text" style={{color:"white",textTransform:"none",marginRight:"10%",fontSize:"20px"}}>Restaurante</Button>
                <Button variant="text" style={{color:"white",textTransform:"none",marginRight:"10%",fontSize:"20px"}}>Sobre Nosotros</Button>
                <Button variant="text" style={{color:"white",textTransform:"none",marginRight:"10%",fontSize:"20px"}}>Eventos</Button>
            </div>
        </div>
    )
}

export default Navbar;
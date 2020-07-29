import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() { 
    return (
        <nav className="Menu"> 
            <a href="/"> 
             <img className="Logo" src={Logo} alt="ArthurFlix logo" /> 
            </a>

        <div className="Teste"> 
            <div>
                <Button as="a" className="ButtonLink" href="/"> 
                O que eu quiser
                </Button>
            </div>
            
            <div>
                <Button as="a" className="Butao" href="/"> 
                Postar Vídeo
                </Button>
           </div>
        </div>

        </nav>
    );
}

export default Menu; 
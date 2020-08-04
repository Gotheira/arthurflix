import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() { 
    return (
        <nav className="Menu"> 
            <Link to="/"> 
             <img className="Logo" src={Logo} alt="ArthurFlix logo" /> 
            </Link>

        <div className="Teste"> 
            <div>
                <Button as={Link} className="ButtonLink" to="/contato"> 
                Contato
                </Button>
            </div>
            
            <div>
                <Button as={Link} className="Butao" to="/cadastro/video"> 
                Postar Vídeo
                </Button>
           </div>
        </div>

        </nav>
    );
}

export default Menu; 
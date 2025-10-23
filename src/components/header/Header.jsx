import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './header.scss';

export const Header = ({setOpen}) => {
    const [length, setLength] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/basket')
        .then(({data}) => {setLength(data.length)})
    }, [])

    return (
        <header>
            <nav className='links'>
                <NavLink to={'/'}><li>Главнаая</li></NavLink>
                <NavLink to={'/menu-page'}><li>Меню</li></NavLink>
                <NavLink to={'/basket-page'}><li>Корзина <sub>{length}</sub> </li></NavLink>
                <button onClick={() => {setOpen(true)}}>Бронь столика</button>
            </nav>
        </header>
    );
}


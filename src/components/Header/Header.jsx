import React from 'react'
import classes from './Header.module.css'
import '../../styles/App.css'
import { Link } from 'react-router-dom'

const Header = function() {

    return(
        <header className={classes.header}>
            <ul className={classes.menu}>
                <li>
                    <Link to='/actor'>Актеры</Link>
                    <ul className={classes.submenu}>
                        <li><Link to="/actor/add">Добавить</Link></li>
                        <li><Link to="/actor/find">Найти</Link></li>
                        <li><Link to="/actor/list">Список</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to='#'>Фильмы</Link>
                    <ul className={classes.submenu}>
                        <li><Link to="#">Добавить</Link></li>
                        <li><Link to="#">Найти</Link></li>
                        <li><Link to="#">Список</Link></li>
                    </ul>
                </li>
                <li><Link to='#'>Пользователи</Link></li>
            </ul>
        </header>
    )
}

export default Header;










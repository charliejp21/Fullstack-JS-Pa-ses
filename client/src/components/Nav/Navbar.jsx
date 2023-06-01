import React from "react";
import SearchBar from "../SearchBar/Searchbar"

import style from './Nav.module.css';

const Nav = () => {

    return(

        <div className={style.topnav}>

            <p><img src="https://cdn.pixabay.com/photo/2014/04/03/10/49/united-nations-311419_1280.png" alt="logo" /></p>

            <a href="/countries">Países</a>

            <a href="/crear-actividad">Crear actividad</a>

            <a href="/mis-actividades">Actividades creadas</a>

            <a href="/">Regresar a inicio</a>

            <SearchBar></SearchBar>

        </div>
    )

}

export default Nav;
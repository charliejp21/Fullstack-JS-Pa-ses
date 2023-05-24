import React from "react";
import SearchBar from "../SearchBar/Searchbar"

import style from './Nav.module.css';

const Nav = () => {

    return(

        <div className={style.topnav}>

            <p><image /></p>

            <a href="/recipes">Países</a>

            <a href="/create">Crear actividad</a>

            <a href="/">Regresar a inicio</a>

            <a href="/mis-actividades">Mis actividades</a>

            <SearchBar></SearchBar>

        </div>
    )

}

export default Nav;
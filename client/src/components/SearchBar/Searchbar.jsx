import { useState } from "react";
import style from "./Searchbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Searchbar(){

    const navigate = useNavigate();

    const [search, setSearch] = useState({

        nombre: "",

    })

    const handleChangeSearch = (event) => {

        const property = event.target.name;

        const value = event.target.value;
        
        setSearch({[property]: value})

    }

    const submitHandlerSearch = (event) => {

        navigate(`/results/${search.nombre}`)
        
    }


 return (
    
    <>
    
    <form onSubmit={submitHandlerSearch}>

        <input type="text" value={search.nombre} name="nombre" onChange={handleChangeSearch} className={style.inputSearch}/>

        <button className={style.btn19}>
            <span className={style.textContainer}>
                <span className={style.text}>Buscar</span>
            </span>
        </button>

    </form>

    </>

 )

}
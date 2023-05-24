import style from "./Inicio.module.css"

const Inicio = () => {

    return(

        <div className={style.mainContainer}>

            <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Logo_of_the_United_Nations.svg/1200px-Logo_of_the_United_Nations.svg.png"/></p>
            <h1>Wiki Countries</h1>
            <h2>All the countries, One place.</h2>
            <h3>Welcome and now filter the countries for activities</h3>
            <br/>
            <button><a href="/countries">Ingresar</a></button>

        </div>

    )
    
}

export default Inicio;
import style from "./Inicio.module.css"

const Inicio = () => {

    return(

        <div className={style.mainContainer}>

            <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Logo_of_the_United_Nations.svg/1200px-Logo_of_the_United_Nations.svg.png" alt="logo"/></p>
            <h1>Wiki Countries</h1>
            <h2>All the countries, One place.</h2>
            <h3>Welcome and now filter the countries for activities</h3>
            <br/>
            <button className={style.btn90}>
                <div className={style.blobs}></div>
                <span><a href="/countries">Ingresar</a></span>
            </button>

            <svg width="0" height="0">
                    <defs>
                        <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            type="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
            </svg>

        </div>

    )
    
}

export default Inicio;
import style from './Countrie.module.css'

export default function Countrie(props){

    const miles = (amount) =>{

        const newAmount = amount.toString().split('').reverse();

        let newArray = []

        let count = 0;

        for (let i = 0; i < newAmount.length; i++) {


            if(count === 3){

                newArray.push(",");

                count = 0

            }

            newArray.push(newAmount[i])

            count++;
            
        }

        return newArray.reverse().join('');

    }

    return(

        <div className={style.divCountrie}>

            <img src={props.imagen} className={style.imageCountrie} alt="countrie"/>
            <h1><a href={"/countrie/" + props.id}>{props.nombre}</a></h1>
            <h2>Alpha3Code: <br />{props.id}</h2>
            <div className={style.infoCountries}>
            <h3>Continente: <br />{props.continente}</h3>
            <h3>Capital: <br />{props.capital}</h3>
            <h3>Subregion: <br />{props.subregion}</h3>
            <h3>Área territorial: <br />{miles(props.area)} km2</h3>
            <h3>Población: <br />{miles(props.poblacion)} habitantes</h3>
            </div>
            <button className={style.btn90}>
                <div className={style.blobs}></div>
                <span><a href={"/countrie/" + props.id}>Ver país</a></span>
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
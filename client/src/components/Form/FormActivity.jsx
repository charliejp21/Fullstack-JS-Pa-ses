import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./FormActivity.module.css";
import validation from "./validation"
import {getCodesCountries, postActivity} from "../../redux/action";

const Form = () => {

    const dispatch = useDispatch();
    
    const countries = useSelector(state => state.countries.codes)

    useEffect(() => {

        if(!countries.length){

            dispatch(getCodesCountries())

        }

    }, [dispatch]);

    const [form, setForm] = useState({

        nombre: "",
        dificultad: "",
        duracion:"",
        temporada: "",
        paises: []

    })

    const [errors, setErrors] = useState({

        nombre: "",
        dificultad: "",
        duracion:"",
        temporada: "Selecciona una opción",

    })

    const changeHandler = (event) => {

        const property = event.target.name;

        const value = event.target.value;

        setForm({

            ...form,

            [property]:value

        })

        validation({

              ...form,

              [property]: value,

            },
            errors,
            setErrors
          );

    }

    const handleCountryChange = (event) => {

        const value = event.target.value;

        const checked = event.target.checked;
    
        if (checked) {

          setForm((prevForm) => ({

            ...prevForm,

            paises: [...prevForm.paises, value],

          }));
          
        } else {

          setForm((prevForm) => ({

            ...prevForm,

            paises: prevForm.paises.filter((pais) => pais !== value),

          }));

        }

      };

    const submitHandler = async (event) => {

        event.preventDefault();

        try {

            await postActivity(form);

            alert("Actividad creada exitosamente")
    
        } catch (error) {

            alert("Error al crear la actividad");
        }
        
    };
      

    return(<>

            <form className={style.formActivities} onSubmit={submitHandler}>

                <div>

                    <label>1° Nombre de la actividad</label>
                    <p>Sólo se permite texto y máximo 40 caracteres</p>
                    <input type="text" value={form.nombre} onChange={changeHandler} name="nombre"/>
                    <br />
                    {errors.nombre && <span>{errors.nombre}</span>}

                </div>

                <div>

                    <label>2° Nivel de dificultad de la actividad</label>
                    <p>Sólo se permite 10 como nivel máximo</p>
                    <input type="number" value={form.dificultad} onChange={changeHandler} name="dificultad"></input>
                    <br />
                    {errors.dificultad && <span>{errors.dificultad}</span>}

                </div>

                <div>

                    <label>3° Duración en horas de la actividad</label>
                    <p>Sólo se permite ingresar una duración de máximo 8 horas</p>
                    <input type="number" value={form.duracion} onChange={changeHandler} name="duracion"></input>
                    <br />
                    {errors.duracion && <span>{errors.duracion}</span>}

                </div>

                <div>

                <label>4° Temporada preferente:</label>
                    <p>Seleccionar una sola opción </p>
                    <div><br/>
                        <select className={style.countriesSeasons} name="temporada" onChange={changeHandler} multiple>

                            <option value="Invierno">Invierno</option>

                            <option value="Primavera">Primavera</option>

                            <option value="Verano">Verano</option>

                            <option value="Otoño">Otoño</option>

                            <option value="Todos">Todos</option>
                            
                            
                        </select>
                    </div>
                    <br/>   
                    {errors.temporada && <span>{errors.temporada}</span>}
                </div>

                <div>

                    <label>5° Países para realizar la actividad</label><p>Selecciona los países para realizar la actividad</p><br/>

                    <div className={style.countriesList}>

                        {countries.map((country) => {

                                return (
                                    
                                   <div className={style.countriesCheck}>

                                   <label key={country.id}>

                                        <input type="checkbox" name="paises" value={country.id} onChange={handleCountryChange}/>

                                        {country.nombre}

                                   </label>

                                   </div>

                                );
                        })}
                 
                    </div>
                       
                </div><br/>

                    {form.nombre !== '' && form.dificultad !== '' && form.duracion !== ''  && form.temporada !== '' ? (

                            <button type="submit" className={style.btn90}>
                            <div className={style.blobs}></div>
                            <span>Enviar</span>
                            </button>

                        ) : (

                            <button type="submit" disabled className={style.btn90}>
                            <div className={style.blobs}></div>
                            <span>Enviar</span>
                            </button>)
                    
                    }  

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
            </form>

    </>)

}

export default Form;
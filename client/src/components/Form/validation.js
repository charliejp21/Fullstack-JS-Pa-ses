const validation = (form, errors, setErrors) => {

    const newErrors = { ...errors };

    // title

    if(form.nombre){

        if(form.nombre.length > 40) setErrors({...errors, nombre: "No puedes superar los 40 cracteres"});

        else if(
            
            !/^[A-Za-z\s]*$/.test(form.nombre)

        ){

            setErrors({...errors, nombre: "Solo debes ingresar texto sin caracteres especiales"});

        }else{

            setErrors({...errors, nombre: ""});

        }

    }

    //Dificultad
    if(form.dificultad){

        if(form.dificultad > 10 ) setErrors({...errors, dificultad: "No se puede tener una dificultad de nivel mayor a 10"});

        else if(
            
            !/^[0-9]+$/.test(form.dificultad)

        ){

            setErrors({...errors, dificultad: "Solo debes ingresar numeros enteros"});

        }else{

            setErrors({...errors, dificultad: ""});

        }

    }

     //Duración
     if(form.duracion){

        if(form.duracion > 8 ) setErrors({...errors, duracion: "La actividad no puede tener una duración mayor de 8 horas"});

        else if(
            
            !/^[0-9]+$/.test(form.duracion)

        ){

            setErrors({...errors, duracion: "Solo debes ingresar numeros enteros"});

        }else{

            setErrors({...errors, duracion: ""});

        }

    }

    //Temporada
    if(form.temporada){

        setErrors({...errors, temporada: ""});


    }

}


export default validation;
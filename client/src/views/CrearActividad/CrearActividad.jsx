import style from "./Crear.module.css";
import Form from "../../components/Form/FormActivity";

const CreateActivity = () => {

    return(

        <div className={style.createActivityPage}>

        <h1> ¡ Crea una actividad para realizar !</h1>

        <Form />

      </div>

    )

}

export default CreateActivity;
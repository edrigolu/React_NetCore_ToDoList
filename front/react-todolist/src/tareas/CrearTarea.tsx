import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlTareas } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioTareas from "./FormularioTareas";
import { tareaCreacionDTO } from "./tareas.model";

export default function CrearTarea() {

    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([]);
    
    async function crear(tarea: tareaCreacionDTO) {
        try {
            await axios.post(urlTareas, tarea);
            history.push('/tareas');
        }
        catch (error) {
            setErrores(error.response.data);
        }
    }

    return (
        <React.Fragment>
            <h3>Crear tarea</h3>
            <MostrarErrores errores={errores} />            
            <FormularioTareas modelo={{ titulo: '', estadoId: 0 }}
               onSubmit={async valores => {
                await crear(valores);
            }}></FormularioTareas>
        </React.Fragment>
    )

}
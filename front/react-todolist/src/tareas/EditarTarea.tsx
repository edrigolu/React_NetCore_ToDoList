import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { estadoDTO } from "../estados/estados.model";
import FormularioEstados from "../estados/FormularioEstados";
import Cargando from "../utils/Cargando";
import { urlTareas } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioTareas from "./FormularioTareas";
import { tareaCreacionDTO, tareaDTO } from "./tareas.model";

export default function EditarTarea() {
    const { id }: any = useParams();
    const [tarea, setTareas] = useState<tareaDTO>();
    const [errores, setErrores] = useState<string[]>([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`${urlTareas}/${id}`)
            .then((respuesta: AxiosResponse<tareaDTO>) => {
                setTareas(respuesta.data);
            })
    })

    async function editar(estadoEditar: tareaCreacionDTO) {
        try {
            await axios.put(`${urlTareas}/${id}`, estadoEditar)
            history.push('/tareas');
        }
        catch (error) {
            setErrores(error.response.data)
        }
    }
    return (
        <React.Fragment>
            <h3>Editar tarea</h3>
            
            <MostrarErrores errores={errores} />
            {/* {tarea ? <FormularioTareas
                modelo={tarea} onSubmit={async valores => {
                    await editar(valores)
                }}
            /> : <Cargando />} */}

            
        </React.Fragment>
    )

}
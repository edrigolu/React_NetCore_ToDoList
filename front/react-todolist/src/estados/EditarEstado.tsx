import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Cargando from "../utils/Cargando";
import { urlEstados } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import { estadoCreacionDTO, estadoDTO } from "./estados.model";
import FormularioEstados from "./FormularioEstados";

export default function EditarEstado() {
    const { id }: any = useParams();
    const [estado, setEstado] = useState<estadoDTO>();
    const [errores, setErrores] = useState<string[]>([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`${urlEstados}/${id}`)
            .then((respuesta: AxiosResponse<estadoDTO>) => {
                setEstado(respuesta.data);
            })
    })

    async function editar(estadoEditar: estadoCreacionDTO) {
        try {
            await axios.put(`${urlEstados}/${id}`, estadoEditar)
            history.push('/estados');
        }
        catch (error) {
            setErrores(error.response.data)
        }
    }

    return (
        <React.Fragment>
            <h3>Editar estado</h3>
            <MostrarErrores errores={errores} />
            {estado ? <FormularioEstados
                modelo={estado} onSubmit={async valores => {
                    await editar(valores)
                }}
            /> : <Cargando />}
        </React.Fragment>
    )
}
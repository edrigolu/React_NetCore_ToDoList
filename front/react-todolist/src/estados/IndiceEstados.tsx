import axios, { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { urlEstados } from "../utils/endpoints";
import { estadoDTO } from "./estados.model";

export default function IndiceEstados() {
    useEffect(() => {
        axios.get(urlEstados)
            .then((respuesta: AxiosResponse<estadoDTO[]>) => {
                console.log(respuesta.data);
            })
    }, [])
    return (
        <React.Fragment>
            <h3>Indice Estados</h3>
            <a className="nav-link" href="/estados/crear">
                Crear estado
            </a>
        </React.Fragment>

    )
}
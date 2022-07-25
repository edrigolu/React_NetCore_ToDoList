import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Button from "../utils/Button";
import { urlEstados } from "../utils/endpoints";
import ListadoGenerico from "../utils/ListadoGenerico";
import { estadoDTO } from "./estados.model";

export default function IndiceEstados() {
    const [estados, setEstados] = useState<estadoDTO[]>();

    useEffect(() => {
        axios.get(urlEstados)
            .then((respuesta: AxiosResponse<estadoDTO[]>) => {
                console.log(respuesta.data);
                setEstados(respuesta.data);
            })
    }, [])
    return (
        <React.Fragment>
            <h3>Estados</h3>
            <a className="btn btn-primary" href="/estados/crear">
                Crear estado
            </a>
            <p></p>
            <ListadoGenerico listado={estados}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {estados?.map(estado => <tr key={estado.id}>
                            <td>
                                {estado.nombre}
                            </td>
                            <td>
                                <a className="btn btn-success" href={`/estados/${estado.id}`}>Editar</a>
                                <Button className="btn btn-danger">Borrar</Button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </ListadoGenerico>
        </React.Fragment>

    )
}
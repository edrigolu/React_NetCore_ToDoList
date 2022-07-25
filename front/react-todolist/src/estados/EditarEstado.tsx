import React from "react";
import { useParams } from "react-router-dom"

export default function EditarEstado() {
    const { id }: any = useParams();
    return (
        <React.Fragment>
            <h3>Pagina editar estado</h3>
            <h4>El id es {id}</h4>
        </React.Fragment>
    )
}
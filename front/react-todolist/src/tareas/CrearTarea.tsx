import React from "react";
import FormularioTareas from "./FormularioTareas";

export default function CrearTarea() {
    return (
        <React.Fragment>
            <h3>Crear tarea</h3>
            <FormularioTareas modelo={{ titulo: '' }}
                onSubmit={valores => console.log(valores)}></FormularioTareas>
        </React.Fragment>
    )

}
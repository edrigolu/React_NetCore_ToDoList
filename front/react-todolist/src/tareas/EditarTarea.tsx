import React from "react";
import FormularioTareas from "./FormularioTareas";

export default function EditarTarea() {
    return (
        <React.Fragment>
            <h3>Editar tarea</h3>
            <FormularioTareas modelo={{ titulo: 'Crear base de datos' }}
                onSubmit={valores => console.log(valores)}></FormularioTareas>
        </React.Fragment>
    )

}
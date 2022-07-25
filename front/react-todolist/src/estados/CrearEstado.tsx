import React from "react";
import FormularioEstados from "./FormularioEstados";

export default function CrearEstado() {
    // const history = useHistory();
    return (
        <React.Fragment>
            <h3>Crear estado</h3>
            <FormularioEstados modelo={{ nombre: '' }} onSubmit={async valores => {
                await new Promise(r => setTimeout(r, 3000))
                console.log(valores);
            }} />

        </React.Fragment>
    )
}
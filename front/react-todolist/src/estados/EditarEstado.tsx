import React from "react";
import FormularioEstados from "./FormularioEstados";

export default function EditarEstado() {
    // const { id }: any = useParams();
    return (
        <React.Fragment>
            <h3>Editar estado</h3>
            <FormularioEstados modelo={{ nombre: 'Crear base de datos' }} onSubmit={async valores => {
                await new Promise(r => setTimeout(r, 3000))
                console.log(valores);
            }} />
            
        </React.Fragment>
    )
}
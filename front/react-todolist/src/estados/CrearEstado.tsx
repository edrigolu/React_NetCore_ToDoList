import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlEstados } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import { estadoCreacionDTO } from "./estados.model";
import FormularioEstados from "./FormularioEstados";

export default function CrearEstado() {
    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([]);
    async function crear(estado: estadoCreacionDTO) {
        try {
            await axios.post(urlEstados, estado);
            history.push('/estados');
        }
        catch (error) {
            setErrores(error.response.data);
        }
    }
    return (
        <React.Fragment>
            <h3>Crear estado</h3>
            <MostrarErrores errores={errores} />
            <FormularioEstados modelo={{ nombre: '' }}
                onSubmit={async valores => {
                    await crear(valores);
                }}
            />
        </React.Fragment>
    )
}
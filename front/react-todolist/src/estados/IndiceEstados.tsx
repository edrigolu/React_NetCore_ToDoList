import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Button from "../utils/Button";
import { urlEstados } from "../utils/endpoints";
import ListadoGenerico from "../utils/ListadoGenerico";
import Paginacion from "../utils/Paginacion";
import { estadoDTO } from "./estados.model";

export default function IndiceEstados() {
    const [estados, setEstados] = useState<estadoDTO[]>();
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [recordsPorPagina, setRecordsPorPagina] = useState(10);
    const [pagina, setPagina] = useState(1);

    useEffect(() => {
        axios.get(urlEstados, {
            params: { pagina, recordsPorPagina }
        })
            .then((respuesta: AxiosResponse<estadoDTO[]>) => {
                const totalDeRegistros = parseInt(respuesta.headers['cantidadtotalregistros'], 10);
                setTotalPaginas(Math.ceil(totalDeRegistros / recordsPorPagina));

                console.log(respuesta.data);
                setEstados(respuesta.data);
            })
    }, [pagina, recordsPorPagina])
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
            <div className="form-group" style={{ width: '150px' }}>
                <label>Registros por página:</label>
                <select className="form-control"
                defaultValue={10}
                    onChange={e => {
                        setPagina(1);
                        setRecordsPorPagina(parseInt(e.currentTarget.value, 10))}}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                </select>
            </div>

            <Paginacion cantidadTotalDePaginas={totalPaginas} paginaActual={pagina} onChange={nuevaPagina => setPagina(nuevaPagina)} />
        </React.Fragment>

    )
}
import axios, { AxiosResponse } from "axios";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { estadoDTO } from "../estados/estados.model";
import Button from "../utils/Button";
import { urlEstados, urlTareas } from "../utils/endpoints";
import ListadoTareas from "./ListadoTareas";
import { tareaDTO } from "./tareas.model";

export default function FiltroTareas() {
    const valorInicial: filtroTareasForm = {
        titulo: '',
        estadoId: 0,
        pagina: 1,
        recordsPorPagina: 1
    }

    const [estados, setEstados] = useState<estadoDTO[]>([]);
    const [tareas, setTareas] = useState<tareaDTO[]>([]);
    const [totalDePaginas, setTotalDePaginas] = useState(0);
    const history = useHistory();
    const query = new URLSearchParams(useLocation().search);

    useEffect(() => {
        axios.get(`${urlEstados}/todos`)
            .then((respuesta: AxiosResponse<estadoDTO[]>) => {
                setEstados(respuesta.data);
            })
    }, [])


    useEffect(() => {
        if (query.get('titulo')) {
            valorInicial.titulo = query.get('titulo')!;
        }

        if (query.get('estadoId')) {
            valorInicial.estadoId = parseInt(query.get('estadoId')!, 10);
        }       

        if (query.get('pagina')) {
            valorInicial.pagina = parseInt(query.get('pagina')!, 10);
        }

        buscarTarea(valorInicial);
    
    }, [])

    function buscarTarea(valores: filtroTareasForm) {
        modificarURL(valores);
        axios.get(`${urlTareas}/filtrar`, { params: valores })
            .then((respuesta: AxiosResponse<tareaDTO[]>) => {
                const totalDeRegistros =
                    parseInt(respuesta.headers['cantidadtotalregistros'], 10);
                setTotalDePaginas(Math.ceil(totalDeRegistros / valorInicial.recordsPorPagina));

                setTareas(respuesta.data);
            })
    }

    function modificarURL(valores: filtroTareasForm) {
        const queryStrings: string[] = [];
        if (valores.titulo) {
            queryStrings.push(`titulo=${valores.titulo}`);
        }

        if (valores.estadoId !== 0) {
            queryStrings.push(`estadoId=${valores.estadoId}`);
        }

        queryStrings.push(`pagina=${valores.pagina}`);
        history.push(`/tareas/filtrar?${queryStrings.join('&')}`)
    }

    return (
        <React.Fragment>
            <h3>Filtro tareas</h3>
            <Formik initialValues={valorInicial}
                onSubmit={valores => {
                    valores.pagina = 1;
                    buscarTarea(valores)
                }}
            >
                {(formikProps) => (
                    <Form>
                        <div className="form-inline">
                            <div className="form-group mb-2">
                                <label htmlFor="titulo" className="sr-only">Tarea</label>
                                <input type="text"
                                    className="form-control" id="titulo"
                                    placeholder="Título de la tarea"
                                    {...formikProps.getFieldProps('titulo')}
                                />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="titulo" className="sr-only">Estado</label>
                                <select className="form-control"
                                    {...formikProps.getFieldProps('estadoId')}
                                >
                                    <option value="0">--Seleccione un estado--</option>
                                    {estados.map(estado => <option key={estado.id}
                                        value={estado.id}>{estado.nombre}</option>)}
                                </select>
                            </div>

                            <Button className="btn btn-primary mb-2 mx-sm-3"
                                onClick={() => formikProps.submitForm()}
                            >Filtrar</Button>
                            <Button className="btn btn-danger mb-2"
                                onClick={() => {
                                    formikProps.setValues(valorInicial);
                                    buscarTarea(valorInicial)
                                }}
                            >Limpiar</Button>
                        </div>
                    </Form>
                )}
            </Formik>
            <ListadoTareas tareas={tareas}/>
        </React.Fragment>
    )
}

interface filtroTareasForm {
    titulo: string;
    estadoId: number;
    pagina: number;
    recordsPorPagina: number;
}


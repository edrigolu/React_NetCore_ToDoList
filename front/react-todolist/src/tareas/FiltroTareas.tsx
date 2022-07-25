import { Form, Formik } from "formik";
import React from "react";
import { estadoDTO } from "../estados/estados.model";
import Button from "../utils/Button";

export default function FiltroTareas() {
    const valorInicial: filtroTareasForm = {
        titulo: '',
        estadoId: 0
    }

    const estados: estadoDTO[] = [{ id: 1, nombre: 'Completada' }, { id: 2, nombre: 'No Completada' }]

    return (
        <React.Fragment>
            <h3>Filtro tareas</h3>
            <Formik initialValues={valorInicial}
                onSubmit={valores => console.log(valores)}>

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
                                <select className="form-control"
                                    {...formikProps.getFieldProps('estadoId')}
                                >
                                    <option value="0">--Seleccione un estado--</option>
                                    {estados.map(estado => <option key={estado.id}
                                        value={estado.id}>{estado.nombre}</option>)}
                                </select>
                            </div>

                            <Button className="btn btn-primary mb-2 mx-sm-3" onClick={() => formikProps.submitForm()}
                            >Filtrar</Button>
                            <Button className="btn btn-danger mb-2"
                                onClick={() => formikProps.setValues(valorInicial)}
                            >Limpiar</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    )

}

interface filtroTareasForm {
    titulo: string;
    estadoId: number;
}
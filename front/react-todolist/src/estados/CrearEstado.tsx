import { Form, Formik } from "formik";
import React from "react";
import Button from "../utils/Button";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";

export default function CrearEstado() {
    // const history = useHistory();
    return (
        <React.Fragment>
            <h3>Crear estado</h3>
            <Formik initialValues={{
                nombre: ''
            }}
                onSubmit={async values => {
                    await new Promise(r => setTimeout(r, 1000));
                    console.log(values)
                }}

                validationSchema={Yup.object({
                    nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
                })}
            >
                {(formikProps) => (
                    <Form>
                        <FormGroupText campo="nombre" label="Nombre" />
                        <Button disabled={formikProps.isSubmitting}
                            type="submit">Guardar</Button>
                        <a className="btn btn-secondary" href="/generos">Cancelar</a>
                    </Form>
                )}

            </Formik>

        </React.Fragment>
    )
}
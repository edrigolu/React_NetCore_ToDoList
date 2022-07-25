import { Formik, Form, FormikHelpers } from "formik";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import * as Yup from "yup";
import { estadoCreacionDTO } from "./estados.model";

export default function FormularioEstados(props: formularioEstadosProps) {
    return (
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido')
                .max(50,'La longitud maxima esde 50 caracteres.')
                .primeraLetraMayuscula()
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" />
                    <Button disabled={formikProps.isSubmitting}
                        type="submit">Guardar</Button>
                    <a className="btn btn-secondary" href="/estados">Cancelar</a>
                </Form>
            )}

        </Formik>
    )
}

interface formularioEstadosProps {
    modelo: estadoCreacionDTO;
    onSubmit(valores: estadoCreacionDTO, accion: FormikHelpers<estadoCreacionDTO>): void;
}
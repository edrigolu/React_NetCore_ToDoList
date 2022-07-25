import { Form, Formik, FormikHelpers } from "formik";
import { tareaCreacionDTO } from "./tareas.model";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { estadoDTO } from "../estados/estados.model";

export default function FormularioTareas(props: formularioTareasProps) {
    return (
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                titulo: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}>
                {formikProps => (
                <Form>
                    <FormGroupText label="Título" campo="titulo" />
                    
                    <div className="form-group">
                        <label>Estado:</label>
                        {/* <SelectorMultiple seleccionados={estadosSeleccionados}
                            noSeleccionados={estadosNoSeleccionados}
                            onChange={(seleccionados, noSeleccionados) => {
                                setGenerosSeleccionados(seleccionados)
                                setGenerosNoSeleccionados(noSeleccionados);
                            }}
                        /> */}
                    </div>
                    <Button disabled={formikProps.isSubmitting} type="submit">Enviar</Button>
                    <a className="btn btn-secondary" href="/">Cancelar</a>
                </Form>
            )}

        </Formik>
    )
}

interface formularioTareasProps {
    modelo: tareaCreacionDTO;
    onSubmit(valores: tareaCreacionDTO, acciones: FormikHelpers<tareaCreacionDTO>): void;
    // estadosSeleccionados: estadoDTO[];
    // estadosNoSeleccionados: estadoDTO[];
}
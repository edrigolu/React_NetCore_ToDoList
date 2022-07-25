import { Form, Formik, FormikHelpers } from "formik";
import { tareaCreacionDTO } from "./tareas.model";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { estadoDTO } from "../estados/estados.model";

export default function FormularioTareas(props: formularioTareasProps) {

    const estados: estadoDTO[] = [{ id: 1, nombre: 'Completada' }, { id: 2, nombre: 'No Completada' }]
    return (
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                titulo: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}>
            {formikProps => (
                <Form>
                    <FormGroupText label="Título" campo="titulo" />

                    <div className="form-group mx-sm-3 mb-2">
                    
                        <select className="form-control"
                            {...formikProps.getFieldProps('estadoId')}
                        >
                            <option value="0">--Seleccione un estado--</option>
                            {estados.map(estado => <option key={estado.id}
                                value={estado.id}>{estado.nombre}</option>)}
                        </select>
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

}
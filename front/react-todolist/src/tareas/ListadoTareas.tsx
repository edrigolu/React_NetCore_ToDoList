import ListadoGenerico from "../utils/ListadoGenerico";
import { tareaDTO } from "./tareas.model";
import css from './ListadoTareas.module.css'
import TareaIndividual from "./TareaInvidual";

export default function ListadoTareas(props: listadoTareasProps) {
    return (
        <ListadoGenerico listado={props.tareas}>
            <div className={css.div}>
                {props.tareas?.map(tarea =>
                    <TareaIndividual tarea={tarea}
                        key={tarea.id}
                    />)}
            </div>
        </ListadoGenerico>
    )
}

interface listadoTareasProps {
    tareas?: tareaDTO[]
}
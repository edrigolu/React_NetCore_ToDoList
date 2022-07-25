import css from './TareaIndividual.module.css'
import { tarea } from './tareas.model';

export default function TareaIndividual(props: tareaIndividualProps) {

    const construirLink = () => `/tarea/${props.tarea.id}`

    return (
        <div className={css.div}>
            <p>
                <a href={construirLink()}>{props.tarea.titulo}</a>
            </p>
            <p>
                <a href={construirLink()}>{props.tarea.estado}</a>
            </p>
        </div>
    )
}

interface tareaIndividualProps {
    tarea: tarea;
}
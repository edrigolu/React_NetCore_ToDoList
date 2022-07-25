import CrearEstado from "./estados/CrearEstado";
import EditarEstado from "./estados/EditarEstado";
import IndiceEstados from "./estados/IndiceEstados";
import LandingPage from "./LandingPage";
import CrearTarea from "./tareas/CrearTarea";
import EditarTarea from "./tareas/EditarTarea";
import ListadoTareas from "./tareas/ListadoTareas";

const rutas = [
    { path: '/estados/crear', componente: CrearEstado },
    { path: '/estados/editar/', componente: EditarEstado },
    { path: '/estados', componente: IndiceEstados },
    { path: '/tareas/crear', componente: CrearTarea },
    { path: '/tareas/editar', componente: EditarTarea },
    { path: '/tareas', componente: ListadoTareas },
    { path: '/', componente: LandingPage, exact: true },
];

export default rutas;
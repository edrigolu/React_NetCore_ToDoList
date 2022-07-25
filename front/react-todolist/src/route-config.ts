import CrearEstado from "./estados/CrearEstado";
import EditarEstado from "./estados/EditarEstado";
import IndiceEstados from "./estados/IndiceEstados";
import LandingPage from "./LandingPage";
import CrearTarea from "./tareas/CrearTarea";
import EditarTarea from "./tareas/EditarTarea";
import FiltroTareas from "./tareas/FiltroTareas";
import RedireccionarALanding from "./utils/RedireccionarALanding";

const rutas = [
    { path: '/estados/crear', componente: CrearEstado },
    { path: '/estados/editar/:id(\\d+)', componente: EditarEstado },
    { path: '/estados', componente: IndiceEstados, exact: true },
    { path: '/tareas/crear', componente: CrearTarea },
    { path: '/tareas/editar/:id(\\d+)', componente: EditarTarea },
    { path: '/tareas/filtrar', componente: FiltroTareas },
    { path: '/', componente: LandingPage, exact: true },
    { path: '*', componente: RedireccionarALanding }
];

export default rutas;
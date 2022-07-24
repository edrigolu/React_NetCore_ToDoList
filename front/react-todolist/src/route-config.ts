import CrearEstado from "./estados/CrearEstado";
import EditarEstado from "./estados/EditarEstado";
import IndiceEstados from "./estados/IndiceEstados";
import LandingPage from "./LandingPage";

const rutas = [
    {path:'/estados/crear', component: CrearEstado},
    {path:'/estados/editar/:id(\\d+)', component: EditarEstado},
    {path:'/estados', component: IndiceEstados, exact: true},

    


    { path: '/', componente: LandingPage, exact: true },

];

export default rutas;
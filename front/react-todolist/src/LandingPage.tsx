import { useEffect, useState } from 'react';
import ListadoTareas from './tareas/ListadoTareas';
import { landingPageDTO } from './tareas/tareas.model';

export default function LandingPage() {
    const [tareas, setTareas] = useState<landingPageDTO>({})

    useEffect(() => {
        const timerId = setTimeout(() => {
            setTareas({
                noCompletada: [
                    {
                        id: 1,
                        descripcion: 'Diseñar interface usuarios',
                        estado: 'No completada'
                    },
                    {
                        id: 2,
                        descripcion: 'Sacar copia base de datos',
                        estado: 'No completada'
                    }
                ],
                completada: [
                    {
                        id: 3, descripcion: 'Levantar requerimiento',
                        estado: 'Completada'
                    }
                ]
            })
        }, 1000);
        return () => clearTimeout(timerId);
    })

    return (
        <>
            <h3>No Completadas</h3>
            <ListadoTareas tareas={tareas.noCompletada} />

            <h3>Completadas</h3>
            <ListadoTareas tareas={tareas.completada} />
        </>
    )

    // return (
    //     // <React.Fragment>
    //     //     <header className="App-header">
    //     //         <img src={logo} className="App-logo" alt="logo" />
    //     //         <p>
    //     //             Aplicación para lista de tareas
    //     //         </p>

    //     //         {/* <a
    //     //           className="App-link"
    //     //           href="https://reactjs.org"
    //     //           target="_blank"
    //     //           rel="noopener noreferrer"
    //     //         >
    //     //           Learn React
    //     //         </a> */}
    //     //     </header>
    //     // </React.Fragment>
    // )

    
}
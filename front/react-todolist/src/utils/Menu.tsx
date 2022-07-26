export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Lista de tareas</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/estados">
                                Estados
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/tareas/filtrar">
                               Filtrar Tareas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/tareas">
                               Tareas
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
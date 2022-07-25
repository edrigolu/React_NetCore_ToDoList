export interface tarea {
    id: number;
    titulo: string;
    estado: string;
}

export interface tareaCreacionDTO {
    titulo: string;
}
export interface landingPageDTO {
    completada?: tarea[];
    noCompletada?: tarea[];
}
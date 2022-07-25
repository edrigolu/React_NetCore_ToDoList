export interface tarea {
    id: number;
    descripcion: string;
    estado: string;
}

export interface landingPageDTO {
    completada?: tarea[];
    noCompletada?: tarea[];
}
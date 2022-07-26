import { estadoDTO } from "../estados/estados.model";

export interface tareaDTO {
    id: number;
    titulo: string;
    // estadoId: string;
}

export interface tareaCreacionDTO {
    titulo: string;
    estadoId: number;
}
export interface landingPageDTO {
    completada?: tarea[];
    noCompletada?: tarea[];
}
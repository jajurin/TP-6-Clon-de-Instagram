import type { Perfiles } from "./Perfiles";
export interface Publicaciones {
    id: number
    nombreUsuario: string;
    imagenUsuario:string;
    imagen: string;
    descripcion: string;
    cantLike: number;
    comentarios: string[];
    fecha: Date;
    perfil: Perfiles;
}
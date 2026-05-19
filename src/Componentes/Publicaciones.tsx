export interface Publicaciones {
    id: number
    imagen: string;
    nombreUser: string;
    descripcion: string;
    cantLike: number;
    comentarios: string[];
    fecha: Date;
}
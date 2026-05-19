import type { Publicaciones } from '../Componentes/Publicaciones'

interface PublicionDetailProps {
  PublicacioneElegida: Publicaciones
}

function PublicionDetail({ PublicacioneElegida }: PublicionDetailProps) {
  return (
    <div className="details">
      <div className="details-card">
        <strong>{PublicacioneElegida.nombreUser}</strong>

        <img
          src={PublicacioneElegida.imagen}
          alt={PublicacioneElegida.nombreUser}
        />

        <p><b>Descripcion:</b> {PublicacioneElegida.descripcion}</p>
        <p><b>Likes:</b> {PublicacioneElegida.cantLike}</p>
        <p><b>Comentarios:</b> {PublicacioneElegida.comentarios.join(', ')}</p>
        <p><b>Fecha:</b> {new Date(PublicacioneElegida.fecha).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default PublicionDetail;
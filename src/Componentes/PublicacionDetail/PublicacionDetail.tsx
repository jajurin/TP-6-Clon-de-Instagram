import type { Publicaciones } from '../Interfaces/Publicaciones'
import './PublicacionDetail.css'

interface PublicionDetailProps {
  PublicacioneElegida: Publicaciones
  onSelect: (id: number | null) => void
}

function PublicionDetail({
  PublicacioneElegida,
  onSelect
}: PublicionDetailProps) {

  return (
    <>
    
      <div className="details">
          <button
        className="volver"
        onClick={() => onSelect(null)}
      >
        Volver
      </button>
        <div className="details-card">
          <strong>
            {PublicacioneElegida.perfil.nombreUser}
          </strong>
          <img
            src={PublicacioneElegida.perfil.imagen}
          />
          <img
            src={PublicacioneElegida.imagen}
            alt={PublicacioneElegida.perfil.nombreUser}
          />
          <p>
            <b>Descripcion:</b>
            {PublicacioneElegida.descripcion}
          </p>
          <p>
            <b>Likes:</b>
            {PublicacioneElegida.cantLike}
          </p>
          <p>
            <b>Comentarios:</b>
            {PublicacioneElegida.comentarios.join(', ')}
          </p>
          <p>
            <b>Fecha:</b>
            {new Date(
              PublicacioneElegida.fecha
            ).toLocaleDateString()}
          </p>

        </div>
      </div>
    </>
  )
}

export default PublicionDetail
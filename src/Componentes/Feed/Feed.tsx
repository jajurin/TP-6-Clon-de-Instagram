import Publicacion from "../Publicacion/Publicacion";
import './Feed.css'
import type { Publicaciones } from '../Interfaces/Publicaciones'

interface FeedProps {
  Publicaciones: Publicaciones[]
  onSelect: (id: number) => void
  toggleLike: (id: number) => void
}

function Feed({
  Publicaciones,
  onSelect,
 toggleLike
}: FeedProps) {

  return (
    <div className="feedContainer">

      <h1>TRENDING</h1>

      <ul className="feedLista">

        {Publicaciones.map((p) => (
          <Publicacion
            key={p.id}
            publicacion={p}
            onSelect={() => onSelect(p.id)}
            toggleLike={toggleLike}
          />
        ))}

      </ul>

    </div>
  );
}

export default Feed;
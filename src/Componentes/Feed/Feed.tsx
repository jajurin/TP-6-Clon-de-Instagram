import Publicacion from "../Publicacion/Publicacion";
import './Feed.css'
import type { Publicaciones } from '../Interfaces/Publicaciones'

interface FeedProps {
  Publicaciones: Publicaciones[]
  onSelect: (id: number) => void
  Like: boolean
  setLike: (value: boolean) => void
}

function Feed({
  Publicaciones,
  onSelect,
  setLike,
  Like
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
            setLike={setLike}
            Like={Like}
          />
        ))}

      </ul>

    </div>
  );
}

export default Feed;
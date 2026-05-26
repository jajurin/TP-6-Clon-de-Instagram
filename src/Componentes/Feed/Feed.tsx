import Publicacion from "../Publicacion/Publicacion";
import './Feed.css'

function Feed({ Publicaciones, onSelect }) {

  return (
    <div className="feedContainer">

      <h1>TRENDING</h1>

      <ul className="feedLista">

        {Publicaciones.map((p) => (
          <Publicacion
            key={p.id}
            publicacion={p}
              onSelect={() => onSelect(p.id)}
            />
        ))}

      </ul>

    </div>
  );
}

export default Feed;
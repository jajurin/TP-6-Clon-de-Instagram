import Publicacion from "../Publicacion/Publicacion";

function Feed({ Publicaciones, onSelect }) {

  return (
    <div>

      <ul>
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
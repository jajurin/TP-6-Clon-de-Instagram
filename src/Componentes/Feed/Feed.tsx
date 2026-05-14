import Publicacion from "../Publicacion/Publicacion";

function Feed({ Publicaciones }) {

  return (
    <div>

      <ul>
        {Publicaciones.map((p, index) => (

          <Publicacion
            key={index}
            publicacion={p}
          />

        ))}
      </ul>

    </div>
  );
}

export default Feed;
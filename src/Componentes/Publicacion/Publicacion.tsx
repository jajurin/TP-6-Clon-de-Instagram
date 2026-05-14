function Publicacion({ publicacion }) {

  return (
    <li>

      <img src={publicacion.imagen} />

      <h2>{publicacion.nombreUser}</h2>

      <p>{publicacion.descripcion}</p>

    </li>
  )
}

export default Publicacion
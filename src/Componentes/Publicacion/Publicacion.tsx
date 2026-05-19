function Publicacion({ publicacion, onSelect }) {
  return (
    <li onClick={onSelect} style={{ cursor: 'pointer' }}>
      <img src={publicacion.imagen} alt={publicacion.nombreUser} />
      <h2>{publicacion.nombreUser}</h2>
      <p>{publicacion.descripcion}</p>
    </li>
  )
}

export default Publicacion
import corazon from '../../assets/corazon.png'
import comentario from '../../assets/comentario.png'
import compartirPubli from '../../assets/compartirPubli.png'
function Publicacion({ publicacion, onSelect }) {
  return (

    <li onClick={onSelect} style={{ cursor: 'pointer' }}>

      <div>

        <img
          src={publicacion.imagenUsuario}
          alt={publicacion.nombreUsuario}/>
         <h2>{publicacion.nombreUsuario}</h2>

      </div>

      <img
        src={publicacion.imagen}
        alt={publicacion.nombreUsuario}
      />

      <p>{publicacion.descripcion}</p>
        <img src={comentario} alt="Comentar" />
        <img src={corazon} alt="Me gusta" />
        <img src={compartirPubli} alt="Compartir" />
    
    </li>
  )
}

export default Publicacion
import corazon from '../../assets/corazon.png'
import comentario from '../../assets/comentario.png'
import compartirPubli from '../../assets/compartirPubli.png'
import './Publicacion.css'

function Publicacion({ publicacion, onSelect }) {

  return (

    <li
      className="publicacionItem"
      onClick={onSelect}
    >

      <div className="publicacionHeader">

        <img
          src={publicacion.imagenUsuario}
          alt={publicacion.nombreUsuario}
        />

        <h2>{publicacion.nombreUsuario}</h2>

      </div>

      <img
        className="imagenPublicacion"
        src={publicacion.imagen}
        alt={publicacion.nombreUsuario}
      />

      <p className="descripcionPublicacion">
        {publicacion.descripcion}
      </p>

      <div className="botonesPublicacion">

        <img src={comentario} alt="Comentar" />

        <img src={corazon} alt="Me gusta" />

        <img src={compartirPubli} alt="Compartir" />

      </div>

    </li>
  )
}

export default Publicacion
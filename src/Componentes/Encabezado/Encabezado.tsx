import image from '../../assets/image-Photoroom.png'
import tuerca from '../../assets/tuerca.png'
import foto from '../../assets/foto.png'
import enviar from '../../assets/Enviar.png'
import nuevoPost from '../../assets/NuevoPost.png'

function Encabezado(){


    return(
        <div>
            
    <form>
      <input
        type="text"
        placeholder="Buscar..."
      />
    </form>
      <img src={image} alt="Logo" />
     <img src={tuerca} alt="Configuracion"/>
       <img src={foto} alt="foto"/>
       <img src={enviar} alt="Enviar"/>
         <img src={nuevoPost} alt="Nuevo Post"/>
        </div>
    )

}

export default Encabezado


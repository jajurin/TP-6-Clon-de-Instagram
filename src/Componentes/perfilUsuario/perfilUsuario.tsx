import homeSelect from '../../assets/homeSelect.png'
import Explore from '../../assets/Explore.png'
import reels from '../../assets/reels.png'
import igtv from '../../assets/igtv.png'
import notificacion from '../../assets/notificacion.png'

function PerfilUsuario({ Perfil }) {

    return (
        <div className="perfil-container">

            <img 
                src={Perfil.imagen} 
                alt={Perfil.nombreUser}
            />

            <h2>{Perfil.nombreUser}</h2>

            <p>{Perfil.alias}</p>

            <p>Seguidores: {Perfil.seguidores}</p>

            <p>Likes: {Perfil.cantLike}</p>

            <img src={homeSelect} alt={Perfil.nombreUser} />
            <img src={Explore} alt={Perfil.nombreUser} />
            <img src={reels} alt={Perfil.nombreUser} />
            <img src={igtv} alt={Perfil.nombreUser} />
            <img src={notificacion} alt={Perfil.nombreUser} />


        </div>
    )
}

export default PerfilUsuario
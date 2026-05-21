import homeSelect from '../../assets/homeSelect.png'
import Explore from '../../assets/Explore.png'
import reels from '../../assets/reels.png'
import igtv from '../../assets/igtv.png'
import notificacion from '../../assets/notificacion.png'

import './PerfilUsuario.css'

function PerfilUsuario({ Perfil }) {

    return (

        <div className="perfil-container">
            <img
                className='perfil-img'
                src={Perfil.imagen}
                alt={Perfil.nombreUser}
            />
            <h2>{Perfil.nombreUser}</h2>
            <p className='alias'>@{Perfil.alias}</p>
            <div className='stats'>

                <div className='stat-box'>
                    <p>{Perfil.seguidores}</p>
                </div>

                <div className='stat-box'>
                    <p>{Perfil.cantLike}</p>
                </div>

            </div>
            <div className='menu'>

                <div className='menu-item activo'>
                    <img src={homeSelect} alt="home" />
                    <p>Home</p>
                </div>

                <div className='menu-item'>
                    <img src={Explore} alt="explore" />
                    <p>Explore</p>
                </div>

                <div className='menu-item'>
                    <img src={reels} alt="reels" />
                    <p>Reels</p>
                </div>

                <div className='menu-item'>
                    <img src={igtv} alt="igtv" />
                    <p>IGTV</p>
                </div>

                <div className='menu-item'>
                    <img src={notificacion} alt="notification" />
                    <p>Notification</p>
                </div>

            </div>

        </div>
    )
}

export default PerfilUsuario
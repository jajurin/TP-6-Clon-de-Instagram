import type { Publicaciones } from '../Interfaces/Publicaciones'
import './PublicacionDetail.css'

interface PublicionDetailProps {
  PublicacioneElegida: Publicaciones
  onSelect: (id: number | null) => void
}

function PublicionDetail({
  PublicacioneElegida,
  onSelect
}: PublicionDetailProps) {


  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains('details-backdrop')) {
      onSelect(null);
    }
  };

  return (
    <div className="details-backdrop" onClick={handleBackdropClick}>
      

      <button className="cerrar-modal" onClick={() => onSelect(null)}>
        ✕
      </button>

      <div className="instagram-modal">
        

        <div className="modal-izquierda">
          <img
            className="imagen-principal"
            src={PublicacioneElegida.imagen}
            alt={PublicacioneElegida.perfil.nombreUser}
          />
        </div>


        <div className="modal-derecha">
          
  
          <div className="modal-header">
            <img
              className="avatar-usuario"
              src={PublicacioneElegida.perfil.imagen}
              alt={PublicacioneElegida.perfil.nombreUser}
            />
            <div className="header-info">
              <strong>{PublicacioneElegida.perfil.nombreUser}</strong>
              <span className="user-alias">{PublicacioneElegida.perfil.alias}</span>
            </div>
          </div>

          <div className="modal-comentarios-area">
            
 
            <div className="comentario-item descripcion-post">
              <img src={PublicacioneElegida.perfil.imagen} alt="" className="avatar-comentario" />
              <p>
                <strong>{PublicacioneElegida.perfil.nombreUser}</strong> {PublicacioneElegida.descripcion}
              </p>
            </div>

      

{PublicacioneElegida.comentarios.map((comentario) => (
  <div key={comentario.id} className="comentario-item">
    <img 
      src={comentario.usuario?.imagen || `https://picsum.photos/50/50?random=${comentario.id}`} 
      alt="User" 
      className="avatar-comentario" 
    />
    <p>
      <strong>{comentario.usuario?.nombreUser || 'usuario_anonimo'}</strong> {comentario.texto}
    </p>
  </div>
))}
          </div>

      
          <div className="modal-footer-acciones">
            
            <div className="iconos-acciones">

              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              
        
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>
              
          
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>

            <span className="likes-count">{PublicacioneElegida.cantLike} Me gusta</span>
            
            <span className="post-fecha">
              {new Date(PublicacioneElegida.fecha).toLocaleDateString(undefined, {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </div>
          <div className="modal-agregar-comentario">
            <input type="text" placeholder="Añade un comentario..." />
            <button className="btn-publicar">Publicar</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default PublicionDetail
import { useEffect, useState } from 'react'
import './App.css'
import { api, apiComentarios } from './Componentes/api'
import Feed from './Componentes/Feed/Feed'
import type { Publicaciones } from './Componentes/Interfaces/Publicaciones'
import PublicionDetail from './Componentes/PublicacionDetail/PublicacionDetail'
import Encabezado from './Componentes/Encabezado/Encabezado'
import type { Perfiles } from './Componentes/Interfaces/Perfiles'
import Stories from './Componentes/Stories/Stories'
import PerfilUsuario from './Componentes/perfilUsuario/perfilUsuario'
import type { Comentarios } from './Componentes/Interfaces/Comentarios'
import Loading from './Componentes/Loader/Loader'

function App() {
  const [Publicaciones, setPublicaciones] = useState<Publicaciones[]>([])
  const [PublicacioneEle, setPublicacioneEle] = useState<Publicaciones | null>(null)
  const [Perfiles, setPerfiles] = useState<Perfiles[]>([])
  const [loading, setLoading] = useState(true)
    const [like, setLike] = useState(false)


  useEffect(() => {
    const cargarDatos = async () => {

     setLoading(true)

      const nuevosPerfiles: Perfiles[] = []
      for (let i = 0; i < 10; i++) {
        const respuesta = await api.get(
          `/cat?width=100&height=100&random=${i}`
        )

        nuevosPerfiles.push({
          id: i,
          imagen: respuesta.request.responseURL,
          biografia: `Amante de los gatos profesional`,
          cantPubl: 1,
          nombreUser: `Mi__Gatito_${i + 1}`,
          alias: `@gatito_${i + 1}`,
          seguidores: Math.floor(Math.random() * 1000),
          cantLike: Math.floor(Math.random() * 1000),
          publicaciones: []
        })
      }

      setPerfiles(nuevosPerfiles)

      const nuevaPublis: Publicaciones[] = []

      for (let i = 0; i < 10; i++) {
        const respuesta = await api.get(
          `/cat/gif/says/Jaju y Alan?filter=mono&fontColor=orange&fontSize=20&type=square&random=${i + 1}`
        )
        
       const respuestaComentarios =
  await apiComentarios.get('https://api.api-ninjas.com/v2/quotes?categories=success%2Cwisdom&limit=5')

const comentariosFake: Comentarios[] =

  respuestaComentarios.data.map(
    (quote: any, index: number) => ({

      id: i * 10 + index,

      texto: quote.quote,

      fecha: new Date(),

      usuario:
        nuevosPerfiles[
          Math.floor(
            Math.random() *(99-
            (nuevosPerfiles.length+1)) + nuevosPerfiles.length+1
          )
        ],

      likes:
        Math.floor(
          Math.random() * 100
        )

    })
)
        nuevaPublis.push({
          id: i,
          perfil: nuevosPerfiles[i],
          imagen: respuesta.request.responseURL,
          nombreUsuario: nuevosPerfiles[i].nombreUser,
          imagenUsuario: nuevosPerfiles[i].imagen,
          descripcion: `Gatito numero ${i} en accion`,
          cantLike: Math.floor(Math.random() * 1000),
          comentarios: comentariosFake,
          fecha: new Date()
        })
      }

      setPublicaciones(nuevaPublis)
      setLoading(false)
 
    }

    cargarDatos()
  }, [])

  const handleSelectPublicacion = (idEl: number | null) => {
    if (idEl === null) {
      setPublicacioneEle(null)
      return
    }
    const publiEncontrada = Publicaciones.find(
      (publi) => publi.id === idEl
    )
    setPublicacioneEle(publiEncontrada ?? null)
  }


return (
  <main>

    <Encabezado />

    {Perfiles[7] && (
      <PerfilUsuario Perfil={Perfiles[7]} />
    )}

    

  {loading ? (
  <Loading />
) : (
  <>
    <Stories Perfiles={Perfiles} />

    <Feed
      Publicaciones={Publicaciones}
      onSelect={handleSelectPublicacion}
      setLike={setLike}
      Like={like}
    />
  </>
)}

    {PublicacioneEle && (
      <PublicionDetail
        PublicacioneElegida={PublicacioneEle}
        onSelect={handleSelectPublicacion}
          setLike={setLike}
          Like={like}
      />
    )}

  </main>
)
}

export default App
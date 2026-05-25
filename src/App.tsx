import { useEffect, useState } from 'react'
import './App.css'
import api from './Componentes/api'
import Feed from './Componentes/Feed/Feed'
import type { Publicaciones } from './Componentes/Interfaces/Publicaciones'
import PublicionDetail from './Componentes/PublicacionDetail/PublicacionDetail'
import Encabezado from './Componentes/Encabezado/Encabezado'
import type { Perfiles } from './Componentes/Interfaces/Perfiles'
import Stories from './Componentes/Stories/Stories'
import PerfilUsuario from './Componentes/perfilUsuario/perfilUsuario'

function App() {
  const [Publicaciones, setPublicaciones] = useState<Publicaciones[]>([])
const [PublicacioneEle, setPublicacioneEle] = useState<Publicaciones | null>(null)
const [Perfiles, setPerfiles] = useState<Perfiles[]>([])


  useEffect(() => {

  const cargarDatos = async () => {
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
        nombreUser: `Mi_Usuario_Gatito_${i + 1}`,
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
        `/cat/gif/says/Hello?filter=mono&fontColor=orange&fontSize=20&type=square&random=${i + 1}`
      )

      nuevaPublis.push({
        id: i,
        perfil: nuevosPerfiles[i],
        imagen: respuesta.request.responseURL,
        nombreUsuario: nuevosPerfiles[i].nombreUser,
        imagenUsuario: nuevosPerfiles[i].imagen,
        descripcion: `Gatito numero ${i} en accion`,
        cantLike: Math.floor(Math.random() * 1000),
        comentarios: ['Buenisimo post hermano'],
        fecha: new Date()
      })
    }

    setPublicaciones(nuevaPublis)
  }

  cargarDatos()

}, [])
   
const handleSelectPublicacion = (idEl: number) => {
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
      <Stories 
        Perfiles={Perfiles}
      />
      <Feed
        Publicaciones={Publicaciones}
        onSelect={handleSelectPublicacion}
      />
      {PublicacioneEle && (
        <PublicionDetail
          PublicacioneElegida={PublicacioneEle}
        />
      )}
  </main>
  )
}
export default App

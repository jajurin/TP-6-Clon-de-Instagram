import { useEffect, useState } from 'react'
import './App.css'
import api from './Componentes/api'
import Feed from './Componentes/Feed/Feed'
import type { Publicaciones } from './Componentes/Publicaciones'
import PublicionDetail from './PublicacionDetail/PublicacionDetal'
import Encabezado from './Componentes/Encabezado/Encabezado'

function App() {
  const [Publicaciones, setPublicaciones] = useState<Publicaciones[]>([])
const [PublicacioneEle, setPublicacioneEle] = useState<Publicaciones | null>(null)


  useEffect(() => {


    
    const cargarPublicacion = async () => {
      const nuevaPublis: Publicaciones[] = []

      for (let i = 0; i < 10; i++) {

        const respuesta = await api.get(`/cat/gif/says/Hello?filter=mono&fontColor=orange&fontSize=20&type=square&random=${i+1}`)

        nuevaPublis.push({
          id: i,
          imagen: respuesta.request.responseURL, //rresponse data rompe lo que trae
          nombreUser: `Usuario_${i+1}`,
          descripcion: `Gatito numero ${i   } en accion ostras!`,
          cantLike: Math.floor(Math.random() * 1000),
          comentarios: ['Buenisimo post hermano'],
          fecha: new Date()
        })


      }
      setPublicaciones(nuevaPublis)
      
    }
    cargarPublicacion()

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

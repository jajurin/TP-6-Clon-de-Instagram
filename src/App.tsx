import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import api from './Componentes/api'
import Feed from './Componentes/Feed/Feed'
import  type { Publicaciones } from './Componentes/Publicaciones'
import publicacion from './Componentes/Publicacion/Publicacion'

function App() {
  const [Publicaciones, setPublicaciones] = useState<Publicaciones[]>([])

  

useEffect(() => {

const cargarPublicacion = async() => {
 const nuevaPublis: Publicaciones[]=[]

  for (let i = 0; i < 10; i++) {

    const respuesta = await api.get('/cat/gif/says/Hello?filter=mono&fontColor=orange&fontSize=20&type=square')
   
    nuevaPublis.push({
      imagen: respuesta.data,
      nombreUser: `Usuario_${i}`,
      descripcion: `Gatito numero ${i} en accion ostras!`,
      cantLike: Math.floor(Math.random() * 1000),
      comentarios: ['Buenisimo post hermano'],
      fecha: new Date()
    })
 
    
  }
setPublicaciones(nuevaPublis)
 }
cargarPublicacion()

}, [])

  return (
    <>
    <Feed 
    Publicaciones={Publicaciones}
    />
    </>
  )
}

export default App

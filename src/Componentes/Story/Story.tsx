function Story({ Perfil }) {
  return (
    <li style={{ cursor: 'pointer' }}>

      <img
        src={Perfil.imagen}
        alt={Perfil.nombreUser} 
      />

      <h2>{Perfil.nombreUser}</h2>

    </li>
  )
}

export default Story
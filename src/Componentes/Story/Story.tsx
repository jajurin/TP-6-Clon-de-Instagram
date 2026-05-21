import './Story.css'

function Story({ Perfil }) {

  return (

    <li className="storyItem">

      <div className="storyBorde">

        <img
          src={Perfil.imagen}
          alt={Perfil.nombreUser}
        />

      </div>

      <h2>@{Perfil.nombreUser}</h2>

    </li>

  )
}

export default Story
import Story from "../Story/Story";
import './Stories.css'

function Stories({ Perfiles }) {

  return (
    <div className="storiesContainer">

      <h1>STORIES</h1>

      <ul className="storiesLista">

        {Perfiles.slice(0, 6).map((perfil) => (
          <Story
            key={perfil.id}
            Perfil={perfil}
          />
        ))}

      </ul>

    </div>
  );
}

export default Stories;
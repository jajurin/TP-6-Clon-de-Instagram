import Story from "../Story/Story";

function Stories({ Perfiles }) {

  return (
    <div>

<h1>STORIES</h1>
      <ul>
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
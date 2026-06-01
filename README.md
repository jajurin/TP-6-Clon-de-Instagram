c/
COMO EJECUTARLO:
PASOS:
PRIMERO:
Tener instalado Node.js.
EN TERMINAL
SEGUNDO:
Clonar el repositorio git clone <url-del-repo> cd TP-6-Clon-de-Instagram
TERCERO
Instalar dependencias (npm install)
CUARTO
Iniciar el proyecto ( npm run dev )
QUINTO
Acceder al navegador (http://localhost:5173/), recomendado mediante la terminal

REFERENCIA: https://www.figma.com/community/file/1004033523744290376

ESTRUCTURA Y COMPONENETES

├── App.tsx                    Componente principal. Maneja los estados y carga los datos.
├── Componentes/
│   ├── api.tsx                Configuración de las APIs utilizadas.
│   ├── Interfaces/
│   │   ├── Publicaciones.tsx  Estructura de una publicación.
│   │   ├── Perfiles.tsx       Estructura de un perfil.
│   │   └── Comentarios.tsx    Estructura de un comentario.
│   ├── Encabezado/            Barra superior con logo, buscador e iconos.
│   ├── Feed/                  Muestra todas las publicaciones.
│   ├── Publicacion/           Componente de una publicación individual.
│   ├── PublicacionDetail/     Vista detallada de una publicación.
│   ├── Stories/               Contenedor de las stories.
│   ├── Story/                 Representa una story individual.
│   ├── perfilUsuario/         Información del perfil mostrado en pantalla.
│   └── Loader/                Animación de carga mientras llegan los datos.

Cada componenete se encuenta en su carpeta junto a su CSS

RESPONSABILIDADES
App.tsx:
Es el componente principal de la aplicación. Se encarga de cargar los perfiles y publicaciones desde las APIs, guardar los estados necesarios y controlar qué publicación está seleccionada. También muestra el loader mientras se cargan los datos y abre el detalle de una publicación cuando el usuario la selecciona.
Encabezado:
Es la barra superior de la aplicación. Contiene el logo, el buscador y algunos íconos de navegación. No maneja estados ni lógica compleja, solo la parte visual.
PerfilUsuario:
Muestra la información del perfil que aparece en el lateral de la pantalla. Recibe un perfil por props y muestra su imagen, nombre, alias, cantidad de seguidores y likes.(al igual dl diseño de referencia)
Stories:
Es el componente que contiene las historias. Recibe la lista de perfiles y muestra varias stories en pantalla.
Story:
Representa una historia individual. Se separó para que cada historia tenga su propio componente y así mantener el código más ordenado.
Feed:
Se encarga de mostrar la lista de publicaciones. Recibe las publicaciones y las recorre para renderizar cada una mediante el componente Publicacion.
Publicacion:
Muestra una publicación individual con su imagen, usuario, descripción y botones de interacción. También permite dar like o seleccionar la publicación para ver más detalles.
PublicacionDetail:
Muestra una publicación en detalle dentro de un modal. Incluye la imagen, la descripción, los comentarios, la cantidad de likes y las acciones disponibles para interactuar con la publicación.
Loader:
Muestra una animación de carga mientras la aplicación obtiene los datos de las APIs.
api.tsx:
Contiene la configuración de las conexiones a las APIs utilizadas en el proyecto. Una API se utiliza para obtener imágenes de los gatos de la consigna y la otra para generar frases que se usan como comentarios.

COMUNICACION:
Perfiles se envía desde App hacia Stories para mostrar las historias de los usuarios.

Perfiles también se envía desde App hacia PerfilUsuario para mostrar la información del perfil principal.

Publicaciones se envía desde App hacia Feed para renderizar todas las publicaciones disponibles.

Publicaciones se envía desde App hacia PublicacionDetail para poder acceder a la información actualizada de las publicaciones, importantisimo para el cambio del like, ya al estar dentro del modal, dentro y fuera el like deberia verse reflejado, y debido a que al agarra una publicacion mediante el click seria como agarrarla "congelada", el like que dariamos dentro del modal no tendria efecto hasta salir del modal.

onSelect se envía desde App hacia Feed para permitir seleccionar una publicación cuando el usuario hace clic sobre ella.

onSelect se envía desde App hacia PublicacionDetail para permitir cerrar el modal y deseleccionar la publicación.

toggleLike se envía desde App hacia Feed para permitir dar o quitar like desde el listado principal.

toggleLike se envía desde App hacia PublicacionDetail para mantener sincronizado el estado del like dentro del modal.

publicacion se envía desde Feed hacia Publicacion para proporcionar los datos de cada publicación individual.

onSelect se envía desde Feed hacia Publicacion para informar qué publicación fue seleccionada.

PublicacioneElegida se envía desde App hacia PublicacionDetail para indicar cuál es la publicación que debe mostrarse en detalle.

Perfil se envía desde Stories hacia Story para mostrar la información de cada historia individual.

HOOKS

useState

Se utiliza en App.tsx para almacenar y actualizar los datos principales de la aplicación.

const [Publicaciones, setPublicaciones] = useState<Publicaciones[]>([])

Guarda todas las publicaciones obtenidas desde la API.

const [PublicacioneEle, setPublicacioneEle] = useState<Publicaciones | null>(null)

Guarda la publicación seleccionada. Cuando vale null, significa que no hay ninguna publicación abierta en detalle.

const [Perfiles, setPerfiles] = useState<Perfiles[]>([])

Guarda los perfiles de usuarios que se muestran en las stories y en el perfil lateral.

const [loading, setLoading] = useState(true)

Indica si los datos todavía se están cargando. Mientras sea true, se muestra el componente Loader.

Estos estados se encuentran en App porque son compartidos por varios componentes de la aplicación.

useEffect

Se utiliza en App.tsx para cargar los datos al iniciar la aplicación.

useEffect(() => {
  cargarDatos()
}, [])

El arreglo de dependencias vacío ([]) hace que el efecto se ejecute una sola vez cuando el componente se monta.

Dentro de este efecto se obtienen los perfiles, las publicaciones y los comentarios desde las APIs utilizadas. También se actualiza el estado loading para mostrar el loader durante la carga y ocultarlo cuando los datos ya están disponibles.
VISUALIZACION INDIVIDUAL

Para mostrar una publicación en detalle se utilizó un modal controlado mediante estado.

La función handleSelectPublicacion se encuentra en App.tsx y se pasa como prop (onSelect) al componente Feed. Luego, Feed reenvía esa misma prop a cada componente Publicacion, permitiendo que una publicación pueda notificar cuál fue seleccionada.

Cuando el usuario hace clic sobre una publicación, Publicacion ejecuta onSelect(), que internamente llama a handleSelectPublicacion(p.id).

Esta función busca la publicación correspondiente dentro del array de publicaciones mediante su id y la guarda en el estado PublicacioneEle.

Mientras PublicacioneEle contenga una publicación, React renderiza el componente PublicacionDetail, mostrándolo como un modal sobre el contenido principal.

Para cerrar el modal, se ejecuta onSelect(null), lo que vuelve a establecer PublicacioneEle en null y hace que el componente deje de renderizarse.

PERFIL LOGGEADO Y DATOS MOSTRADOS

El perfil que aparece en el lateral de la aplicación se obtiene a partir de los perfiles generados durante la carga inicial de datos.

Al iniciar la aplicación se crean 10 perfiles utilizando imágenes obtenidas desde la API de gatos. Para representar al usuario "logueado", se eligió utilizar el perfil ubicado en la posición 7 del array.

{Perfiles[7] && (
  <PerfilUsuario Perfil={Perfiles[7]} />
)}

Cada perfil contiene una imagen de gato y datos generados automáticamente, como el nombre de usuario, alias, cantidad de seguidores y likes.

{
  imagen: respuesta.request.responseURL,
  nombreUser: `Mi__Gatito_${i + 1}`,
  alias: `@gatito_${i + 1}`,
  seguidores: Math.floor(Math.random() * 1000),
  cantLike: Math.floor(Math.random() * 1000),
  biografia: 'Amante de los gatos profesional',
  cantPubl: 1,
  publicaciones: []
}

El componente PerfilUsuario se encarga de mostrar la información del perfil seleccionado como usuario principal de la aplicación.

Entre los datos que se muestran se encuentran:

La foto de perfil, obtenida desde la API de imágenes de gatos.
El nombre de usuario (nombreUser).
El alias (alias), mostrado con el formato @usuario.
La cantidad de seguidores, acompañada por un ícono representativo.
La cantidad total de likes (cantLike), mostrada junto a un ícono de corazón.

Además, el componente incluye un menú lateral de navegación con las opciones Home, Explore, Reels, IGTV y Notification. Estas opciones son decorativas y tienen como objetivo simular la interfaz de Instagram en su versión de escritorio

ESTADOS
Estados utilizados
Publicaciones

Guarda todas las publicaciones de la aplicación. Es el estado principal desde el que se obtiene la información que se muestra en el feed y en el detalle de cada publicación.

PublicacioneEle

Guarda la publicación actualmente seleccionada. Si su valor es null, significa que no hay ninguna publicación abierta en detalle.

loading

Indica si los datos todavía se están cargando. Mientras sea true, se muestra el componente Loader. Cuando finaliza la carga, se muestra el contenido principal.

Perfiles

Almacena todos los perfiles generados durante la carga inicial. Estos perfiles se utilizan para mostrar las stories, asignar autores a los comentarios y mostrar el perfil principal de la aplicación.

Detalle:
Usamos const toggleLike = (id: number) => {
  setPublicaciones(prev =>
    prev.map(publi =>
      publi.id === id
        ? {
            ...publi,
            liked: !publi.liked
          }
        : publi
    )
  )
}

La función recibe el id de la publicación sobre la que se hizo clic.

Luego recorre el array de publicaciones utilizando map(). Cuando encuentra la publicación cuyo id coincide con el recibido por parámetro, crea una copia de esa publicación y cambia el valor de la propiedad liked a su opuesto:

Si liked era true, pasa a false.
Si liked era false, pasa a true.

Se decidió guardar el estado del like dentro de Publicaciones para que tanto el feed como PublicacionDetail trabajen con los mismos datos. De esta manera, cuando una publicación recibe o pierde un like, el cambio se refleja automáticamente en ambos lugares.

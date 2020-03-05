import React from 'react'

// exportamos por defecto un componente funcional puro (no tiene STATE)
// Para ello creamoss un ARROW FUNCTION que tendra como parametro las props y devolvera el html que copiamos en Bulma
// recordar que lo copiado es HTML pero  ahora lo devolvemos como elementos de REACT


//para poder exportarlo mediante el nombre ( de forma NOMBRADA) lo que hacemos es exportarla como si fuese una constante:
// se recomienda utilizar el atributo className

export const Title = ({children}) => (
<h1 className="title">{children}</h1>



//******** */
//export default ({children}) => (
//   <h1 class="title">{children}</h1>
//


//export default ({title}) => (
//    <h1 class="title">{title}</h1>
    
   // <div>
   // <h1 class="title">Title</h1>
   // <h2 class="subtitle">Subtitle</h2>
   // </div>
)


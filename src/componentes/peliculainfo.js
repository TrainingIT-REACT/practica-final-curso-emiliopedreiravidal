import React ,{Component} from 'react'
import Proptypes from 'prop-types'

import {Link} from 'react-router-dom'  // las navegaciones usando el enlace indicado

import '../paginas/home.css'

//Usaremos un componente CARD que he encontrado en BULMA, que me servira para mostrar 
//la info de la pelicula de una forma visual

export class FilmInfo extends Component{
//definimos unas propTypes para los datos a mostrar

  static propTypes = {
    id     : Proptypes.string,
    title  : Proptypes.string,
    year   : Proptypes.string,
    poster : Proptypes.string,
    type   : Proptypes.string    
   }
  
   //Primero extraemos todas las props
   render() {
    console.log ('chequeo',this.props)
    const { id,title, year, poster,type} = this.props
    return(
       //queremos mostrar la INFO de la pelicula. La mostraremos en otra pagina. Crearemos un enrutamiento.


<Link to={`/detail/${id}`} className="Home__movie">
<img src={poster} alt={title} className="Home__movieImg" />
<img src={poster} alt={title} className="Home__movieImg Home__movieImg_blured" />
<div className="Home__movieContent">
  <h3 className="Home__movieContent-title">{title}</h3>
  <p className="Home__movieContent-year">{year} ({type})</p>
</div>
</Link>


    )      
   }
}
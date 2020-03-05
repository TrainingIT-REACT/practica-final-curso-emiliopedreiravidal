import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FilmInfo} from './peliculainfo.js'

import '../paginas/home.css'


export class Listapeliculas extends Component {

    static propTypes = {
        listapeliculas  : PropTypes.array
       }
     render() {
        //volcamos datos del array
        const { listapeliculas} = this.props
        //vamos a evitar mostrar las peliculas como una lista. Intentaremos mostrarlo en columnas. Mejorando el diseño (tanto el UX y UI)
        // utilizaremos una etiqueta <div> para crear un 
         return (
             <div className = 'Listapeliculas'>  
             {  listapeliculas.map( pelicula => {
                    return(
                        <div key    = {pelicula.imdbID} className = 'Listapeliculas_Item'>  
                         <FilmInfo  
                          id     = {pelicula.imdbID}                         
                          title  = {pelicula.Title}
                          year   = {pelicula.Year}
                          poster = {pelicula.Poster}
                          type   = {pelicula.Type}/> 
                          </div>
                          )
                         
                    }) 
             }            
             </div>
          )


   
    }
}

//************************************************Crearemos un componente reusable que muestre el listado de las peliculas ***********/

//listadopeliculas(){
    //volcamos datos array results
//    const {results} =  this.state

   //prueba listado datos correctos
   // return results.map( pelicula => <p key = {pelicula.imdbID} >{pelicula.Title}</p>) }
  
//   return results.map( pelicula => {
//    return(
//      <FilmInfo 
//        key    = {pelicula.imdbID}
//        title  = {pelicula.Title}
//        year   = {pelicula.Year}
 //       poster = {pelicula.Poster}/> ) 
 //   }) 
 // }
//este componente se encargara de renderizar la portada del buscador

import React , {Component} from 'react'
import {Listapeliculas} from '../componentes/listapeliculas.js'     // ponemos dos puntos para definir que el 
import {Title} from '../componentes/titulo.js'
import {BuscadorFormulario} from '../componentes/buscadorform.js' // al no poner defaut se importa por nombre

export class Home extends Component{
    
//Añadimos un state que le vamos a llamar results y lo inicializamos con un ARRAY vacio.
//en este state volcaremos los datos de la consulta
  state = { busqueda: false, results: []}  
  
  // la definimos como ARROW FUNCTION, ya que accedemos al contexto THIS, para enlazar el contextop correcto
  //En este metodo tambien actualizamos el valor de  "busqueda", ya que este metodo se ejecuta cada vez que usuario realiza una busqueda
    handleResults = (results) => {
      this.setState({results, busqueda : true})
    }  
    renderResults(){
      console.log('resultados',this.state.results)
      return ( this.state.results.length === 0 
          ?<div>
            <br></br>
            <h6><span role="img" aria-label="sad face"> 😞 </span>  Sorry, try something different...</h6>
           </div>
          :<Listapeliculas listapeliculas = {this.state.results}/>   // ya no usamos el metodo this.listadopeliculas(). Sino que llamamos al componente listapeliculas
      )
    }

    render() {
        return (
          <section>
            <div >
            <Title>BUSCADOR DE PELICULAS</Title>     
            <div className = 'SearchForm-wrapper'>
             <BuscadorFormulario onResults={this.handleResults} />      
            </div> 
            <div className="bloque">           
            {
            this.state.busqueda 
             ? this.renderResults()
             : <div>
               <br></br>
               <h6> You can search Movies, Series or Videogames </h6>
               </div>
             }
             </div> 
             <br></br>
             <p>I use <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDB API</a> for results</p>
             </div>
         </section>
        )    
    }
}







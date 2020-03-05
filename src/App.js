
import React , {Component} from 'react';
import 'bulma/css/bulma.css'
import './App.css';
//import {FilmInfo} from './componentes/peliculainfo.js'
import {Home} from './paginas/home.js'
import {PeliculaDetalle} from './paginas/peliculadetalle.js'
import {NotFound} from './paginas/notfound.js'
import {Switch} from 'react-router-dom' // sirve para envolver rutas. Solo rendizara la primera ruta que satisfaga la regla definida en el path
import {Route} from 'react-router-dom'  // nos permitira indicar las rutas de forma declarativa

class App extends Component {

  //crearemos una prop onResults en el componente BuscadorFormulario, que sera la que pase el array de pelicula
  //Dentro del componente Switch tenemos que especificar las rutas de nuestro componente
  //Para cada una utilizamos el componente "Route"
  //la 1º se debe satisfacer de forma exacta para entrar. El path a resolver es la raiz principal y el componente a cargar "Home"
  //la 2º (ruta del detalle). le decimos que tendra un  parametro "id", que sera la id de la pelicula. Cargara componente "PeliculaDetalle"
  render() {
   return (    
    <div className="App">
     <Switch>
       <Route exact path ='/' component = {Home} />   
       <Route path = '/detail/:peliculaId' component={PeliculaDetalle}/>
       <Route component = {NotFound} />
     </Switch>
    </div>    
  );
 }
}  

export default App;


  // **************** creo un componente reusable que lista y muestra un array de peliculas**********//
  // dejo comentado este metodo
/*  listadopeliculas(){

    //volcamos datos array results
    const {results} =  this.state

  //prueba listado datos correctos
   // return results.map( pelicula => <p key = {pelicula.imdbID} >{pelicula.Title}</p>) }
  
   return results.map( pelicula => {
   return(
      <FilmInfo 
        key    = {pelicula.imdbID}
        title  = {pelicula.Title}
        year   = {pelicula.Year}
        poster = {pelicula.Poster}/> ) 
    }) 
  }
************************************************************************************** */

/* REFACTORIZAMOS EL CODIGO. CREO COMPONENTE "HOME" QUE RENDERIZA EL BUSCADOR

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
          <p>  Sorry, try something different...</p>
         </div>
        :<Listapeliculas listapeliculas = {this.state.results}/>   // ya no usamos el metodo this.listadopeliculas(). Sino que llamamos al componente listapeliculas
    )
  } 


  **************************************************
/*  const url  = new URL(document.location)
    const Page = url.searchParams.has('id')
     ? <PeliculaDetalle id = {url.searchParams.get('id')}/>
     : <Home/> 
**********************************************



     <Title>BUSCADOR DE PELICULAS</Title>     
     <div className = 'SearchForm-wrapper'>
      <BuscadorFormulario onResults={this.handleResults} />      
     </div>            
     {
     this.state.busqueda 
      ? this.renderResults()
      : <div>
        <br></br>
        <h6> You can search Movies, Series or Videogames </h6>
        </div>
      }
      <br></br>
      <p>I use <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDB API</a> for results</p>
      */
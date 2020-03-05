import React, {Component} from 'react'

const API_KEY = '65bd2a58'  // la KEY que me dieron para las consultas de la API

export class BuscadorFormulario extends  Component {    
    //en este componente declarar un STATE inicial .
    //En el state tendremos una propiedad INPUTMOVIE
    //En este state lo iniciamos a vacio y luego servira 
    //guardar lo que escribimos en el input. Para ello añadimos una prop al elemento input
    state = {
        inputMovie: ''
    }
    //definimos el metodo handleChange recoge el evento
    //la definimos como ARROW FUNCTION para acceder al contexto
    // la propiedad TARGET contiende el elemento que esta causando el evento. 
    // Y dentro, la propiedad value que contiene el texto que contiene inputMovie.
    handleChange = (e) => {
        this.setState({ inputMovie: e.target.value });
    }
    
    handleSubmit = (e) => {
        // lo primero que haremos es evitar que se ejecute el evento nativo por defecto.Asi lo podemos reescribir
        e.preventDefault()
        //alert(this.state.inputMovie) lo usaba para comprobar que recibia el texto de busqueda correctamente
        //usamos ahora el metodo fetch() para la busqueda de datos  . recordar se le pasa la URL y dos posibles respuestas.
        //en la web si consultamos a la API para recuperar la pelicula, hay que pasarle un parametro t  (movie title to search)
        
        const { inputMovie } = this.state
       // console.log(API_KEY)
       // console.log(inputMovie)

        fetch( `http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then( res => res.json())
        .then( resultado => {
            //usamos un console para saber 
            console.log(resultado) 
            //volcamos los datos .MIramos en la consola.Extraemos Search y TotalResults del parametro resultado.
            //OJO!! importante para evitar errores en titulos no encontrados, o palabras mal escritas
            //Asignamos valor por defecto a una desestructuración
            const { Search = [], TotalResults = "0"} = resultado 
            console.log({ Search, TotalResults })
            //DUDA...donde guardamos el resultado???  No tiene mucho sentido guardarlo en este componente
            //ya que este componente se encarga de buscar datos y no de mostrarlos; por lo que no tiene 
            //sentido guardarlos en el STATE de este componente. Lo guardaremos en el STATE del Componente Padre
            // Es en este punto, que ya tenemos los resultados del servicio WEB, los cuales pasaremos a la prop del componente        
            this.props.onResults(Search)
          } )    
      }  

    render(){
        return(
          // envolvemos todo el componente en una etiqueta FORM
          //y lo que queremos controlar es cuando se hace un SUBMIT
          // de este formulario
          //Metodo handleSubmit() -->controla el evento onSUbmit, que se lanza cuando se da al BOTON del Formulario.
           <form onSubmit = {this.handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input className="input"
                    //definimos una prop, y le pasamos el metodo que se ejecutara cada vez
                    // que detecte un cambio en el input
                     onChange = {this.handleChange}
                     type="text" 
                     placeholder="Buscar pelicula"/>
                 </div>
            <div className="control">
            <button className="button is-info">
               Search
            </button>
             </div>
            </div>
            </form>
        )
    }
}


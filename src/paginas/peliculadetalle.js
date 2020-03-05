import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ButtonBackToHome} from '../componentes/ButtonBackToHome.js'

import './Detail.css'


const API_KEY = '65bd2a58'  // la KEY que me dieron para las consultas de la API

export class PeliculaDetalle extends Component {
    //este componente  ya no recibe el id por una prop . (Un ID de pelicula). Sino que le llega por URL
    //OJO !! IMPORTANTE !! cuando usamos un componente PAGINA en una Route, le inyecta automaticamente
    //una serie de props a las que podemos acceder!!

    static propTypes = {
        match : PropTypes.shape({
            params : PropTypes.object, //todos los parametros de la URL
            isExact: PropTypes.bool,   // si la ruta que ha entrado es exactamente la que se espera
            path: PropTypes.string,    // que tiene el patron que hemos usado para esta ruta (/detail/id)
            url: PropTypes.string      // contiene la URL que ha hecho MATCH con la ruta.            
        })
    } 

    state = { datospelicula : {} }
    //metodo consulta info PELICULA
    fetchPelicula({id}){
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(response => response.json())
        .then(datospelicula => {
          console.log('informacion pelicula', datospelicula);
          this.setState({datospelicula})
        });
    }    
    //en el ciclo de vida componentDidMount(), hacemos la peticion fetch para la info de la pelicula
    componentDidMount() {
        console.log(this.props)
        const {peliculaId} = this.props.match.params
        this.fetchPelicula({id: peliculaId})
    }

    goBack() {
        window.history.back()
    }

    render(){
        
        const {Title, Actors,Runtime,Genre,Director,Country, Released, Type, imdbRating, Poster,Metascore, Plot} = this.state.datospelicula
        console.log(this.state)
        return (
            <div className="Detail">
              <div className="Detail__card">
                <div className="Detail__column Detail__column_img">
                  <img src={Poster} alt={Title} className="Detail__poster Detail__poster_blured"/>
                  <img src={Poster} alt={Title} className="Detail__poster"/>
                </div>
                <div className="Detail__column Detail__description">
                  <h2 className="Detail__title title">{Title}</h2>
                  <div className="tags">
                    <p className="tag is-rounded">{Released}</p>
                    <p className="tag is-rounded">{Country}</p>
                    <p className="tag is-rounded">{Type}</p>
                  </div>
                  <p>
                    <strong>IMDB Rating:</strong> <span className="tag is-warning"><i className="fas fa-star Detail__star"></i> {imdbRating}</span>
                  </p>
                  <p>
                    <strong>Actors:</strong>
                    <br/>
                    {Actors}
                  </p>
                  <div className="Detail__footer">
                    <ButtonBackToHome/>
                  </div>
                </div>
              </div>
            </div>
          )
    }
}
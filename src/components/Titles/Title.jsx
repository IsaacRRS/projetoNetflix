import './Title.css'
import { Link } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'

const Title = ({title, categoria}) => {

  const [dadosAPI, inDadosAPI] = useState([]);

  const fichaRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDc3ZDFjOTc0ZjBlNTEzZWJlMDY5YzZmNTg4MzM0NiIsIm5iZiI6MTczMDYyNDg1OS4zODY0NjY1LCJzdWIiOiI2NzI3M2M3MWMwYmMwNzQ5ZDBkODhmN2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WP5vuJnlaQKH0irqLs0A1_Xe00jebevnLkPIOh9H6Qs'
    }
  };

  const conAPI = (event)=>{

    event.preventDefault();
    fichaRef.current.scrollLeft += event.deltaY;

  }
  
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${categoria?categoria:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => inDadosAPI(res.results))
    .catch(err => console.error(err));

    fichaRef.current.addEventListener('wheel', conAPI)
  },[])

  return (

    <div className='title'>
      <h2>{title?title:"Popular"}</h2>
      <div className="list" ref={fichaRef} >
        {dadosAPI.map((ficha, index) => {
          
          return <Link to={`/player/${ficha.id}`} className="ficha" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ficha.backdrop_path} />
            <p>{ficha.original_title}</p>
          </Link>
        })}
        
      </div>
    </div>
  )
}

export default Title

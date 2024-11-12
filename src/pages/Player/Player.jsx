import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const Player = () => {

  const {id} = useParams();

  const [dadosAPI, inDadosAPI] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDc3ZDFjOTc0ZjBlNTEzZWJlMDY5YzZmNTg4MzM0NiIsIm5iZiI6MTczMDYyNDg1OS4zODY0NjY1LCJzdWIiOiI2NzI3M2M3MWMwYmMwNzQ5ZDBkODhmN2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WP5vuJnlaQKH0irqLs0A1_Xe00jebevnLkPIOh9H6Qs'
    }
  };

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => inDadosAPI(res.results[0]))
    .catch(err => console.error(err));

  },[])

  return (
    <div className='player'>

      <iframe width='85%' height='85%'
      src={`https://www.youtube.com/embed/${dadosAPI.key}`} title='trailer' frameBorder='0' 
      allowFullScreen
      >       
      </iframe>
      
      <div className="info">
        <p>{dadosAPI.name}</p>
        <p>{dadosAPI.published_at.slice(0, 10)}</p>
        <p>{dadosAPI.type}</p>
      </div>

    </div>
  )
}

export default Player

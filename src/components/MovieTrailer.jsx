import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import useFetch from '../hooks/useFetch';

function MovieTrailer({ movieId }) {
    const [trailerKey, setTrailerKey] = useState(null);
  
    useEffect(() => {
    }, []);
   
    const data = useFetch(`/movie/${movieId}`)
    
    return (
      <div>
        
      </div>
    );
  }
  
  export default MovieTrailer;
  
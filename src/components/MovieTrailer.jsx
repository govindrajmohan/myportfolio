import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import useFetch from '../hooks/useFetch';

function MovieTrailer({ movieId }) {
    const [trailerKey, setTrailerKey] = useState(null);
  
    useEffect(() => {
    }, []);
    console.log("MovieId", movieId)
    const data = useFetch(`/movie/${movieId}`)
    console.log("Data", data)
    // const {fetchTrailerKey} = useFetch(`popular/${movieId}/videos`)
    // //  const videos = fetchTrailerKey;
    // console.log("Fetch Trailer", fetchTrailerKey)
    //       const videos = fetchTrailerKey;
    //     const trailer = videos.filter((video) => video.type === 'Trailer');
    //   if (trailer) {
    //       setTrailerKey(trailer.key);
    //     }
        // console.log(videos)
        // console.log(fetchTrailerKey);
   
        // const trailer = videos.find((video) => video.type === 'Trailer');
  
    // const fetchTrailerKey = async () => {
    //   try {
    //     const response = await axios.get(
    //       `https://api.themoviedb.org/3/movie/${movieId}/videos`,
    //       {
    //         params: {
    //           api_key: 'YOUR_TMDB_API_KEY',
    //         },
    //       }
    //     );
  
    //     const videos = response.data.results;
    //     const trailer = videos.find((video) => video.type === 'Trailer');
  
    //     if (trailer) {
    //       setTrailerKey(trailer.key);
    //     }
    //   } catch (error) {
    //     console.error('Error fetching trailer:', error);
    //   }
    // };
  
    return (
      <div>
        {/* {trailerKey ? (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailerKey}`}
            controls
          />
        ) : (
          'Trailer not available'
        )} */}
      </div>
    );
  }
  
  export default MovieTrailer;
  
import {useState, useEffect } from 'react'
import axios from 'axios'
const useFetch = (url) => {
  
  const [data, setData] = useState(null)
  const[loading, setLoading] = useState(false);
//   const [error, setError] = React.useState(null)
    const BASE_URL = "https://api.themoviedb.org/3/";

//   const [loading, setLoading] = React.useState(false)

 
  const request = async () => {
    setLoading(false)
    await axios.get(BASE_URL+url,{
        params: {
          api_key: '7e5122f42b3d47b2f9c1deaf4e1d2214',
        },
      }).then((result) => {
        setData(result.data);
        setLoading(true);
        // return result;
        
      }).catch((err) => {
        console.log(err);
      })
    }
    useEffect(()=>{
      request();
     
    },[url])
    
  return {data,loading}
  
}

export default useFetch
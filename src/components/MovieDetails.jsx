import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import './MovieDetails.css'
import dayjs, { Dayjs } from "dayjs"
import MovieTrailer from "./MovieTrailer";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const MovieDetails = () => {
    const [name,setName] = React.useState("");
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(
    `${mediaType}/${id}`
  );

  const {data:credit} = useFetch(
    `${mediaType}/${id}/credits`
  );
 
  const director = credit?.crew.filter((f) => f.job === "Director");



  const writer = credit?.crew.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
);
 
  return (
    <div className="container-fluid movie-details">
      <div className="container movie-backdrop" style={{backgroundImage: `linear-gradient(180deg,rgba(2, 9, 20, 0.7) 0%,#020b18 79.17%),url(https://image.tmdb.org/t/p/w500/${data?.backdrop_path})`,backgroundSize: "cover",backgroundposition: "center" }}>
        <div className="row ">
          <div className="col-sm-12 col-md-4 col-lg-4 movie-poster">
           
           {<LazyLoadImage
            className="movie-details-img"
            alt=""
            // width="100%"
          // height="300"

            effect="blur"
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
        /> || <Skeleton count={1} height="300px" baseColor="#fff" highlightColor="red"/>}
                
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8 movie-info">
            <h2>{data?.title || <SkeletonTheme baseColor="#202020" height="300px" count={1} highlightColor="#444"/>}</h2>
            <p className="sub-title">{data?.tagline}</p>
            {data?.genres.map((val,index)=>{
                return(
                    <span key={val.id} className="genre-name">{val.name || <SkeletonTheme baseColor="#202020" count={1} highlightColor="#444"/>}</span>
                )
            })}
            
            <MovieTrailer movieId={id} />
            <h2>Overview</h2>
            <p>{data?.overview || <SkeletonTheme baseColor="#202020"  count={5} highlightColor="#444"/>}</p>
            <p className="movie-status">Status : <span>{data?.status}</span> |  Release Date: <span>{dayjs(data?.release_date).format("MMM D, YYYY")}</span> | Runtime : <span> {data?.runtime}m</span> </p>
            <p className="movie-status">Director : <span>{director?.map((val,index)=>{return(val.name)})}</span></p>
           
           
            {/* <p className="movie-status">Writter : {writer?.map((val,index)=>{return(
                writer.length > 0 ? <span key={index}> {val.name}  | 
                </span> :
                <span key={index}>{val.name}
                </span> 
 
            )})}</p> */}

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

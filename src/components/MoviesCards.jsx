import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import RatingCircle from "./RatingCircle";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import dayjs from "dayjs";
import useFetch from "../hooks/useFetch";

export const MoviesCards = (props) => {
  const navigate = useNavigate();
  const {data:credit} = useFetch(
    `movie/${props.index}`
  );
 
  console.log(credit?.genres);

  return (
  
    <Card
      sx={{ maxWidth: 450, margin: "10px", backgroundColor: "#CF0202"}}
      key={props.index}
      onClick={() => navigate(`/movie/${props.index}`)}
      className="movie-cards"
    >
      {<LazyLoadImage
            className="card-img"
            alt=""
            width="100%"
            effect="blur"
            src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
        /> || <Skeleton count={1} height="300px" baseColor="#fff" highlightColor="red"/>}
        {/* <CardMedia
          component="img"
          height="300"
          image={`https://image.tmdb.org/t/p/w500/${props.poster}`}
          alt="Netflix"
          backgroundposition="center"
        /> */}

      <CardContent className="card-content" sx={{padding:{
        xs:"7px 5px",
        md:"8px 5px"
      }}}>
        <RatingCircle rating={props.rating}/>
        <h3 className="card-typography-title" variant="body2" sx={{color:"#fff",fontSize:"20px", display:"inline"}}>
          {props?.title || <Skeleton count={2} baseColor="#fff" highlightColor="red"/>}
        </h3>
        
        <h5 className="card-typography-p" variant="body2"  sx={{color:"#fff", display:"inline"}}>
          Release Date : 
          {<span>{dayjs(props?.release_date).format(" DD MMM, YYYY")}</span> || <Skeleton count={1} baseColor="#fff" highlightColor="red"/>}
        </h5>
        {/* <h5 className="card-typography-p" variant="body2" sx={{color:"#fff", display:"inline", fontweight:"600",fontStyle:"italic"}} >
        </h5>
        */}
        <h5 className="card-typography-p" variant="body2"  sx={{color:"#fff", display:"inline"}}>
          Genres : {credit?.genres?.map((genre,index) =>{return( <span className="cards-genre">{genre.name} </span>)}) || <Skeleton count={1} baseColor="#fff" highlightColor="red"/>}
        </h5>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
};

export default MoviesCards;

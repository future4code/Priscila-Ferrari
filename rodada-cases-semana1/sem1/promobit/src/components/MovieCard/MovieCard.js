import React from "react";
import { useHistory } from "react-router";
import { goToDetails } from "../../routes/coordinator";
import { Card, MovImage } from "./styled";


const MovieCard = (props) => {
  const history = useHistory()
  const { movies } = props

  return (
    <>
      {
        movies.results && movies.results.map((movie) => {
          return <Card key={movie.title} onClick={()=>goToDetails(history, movie.id)}>
            <MovImage style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})` }}>
             
            </MovImage>
          </Card>
        })
      }
    </>
  );
}

export default MovieCard;
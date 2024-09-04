import React from "react";


const SeeAlso = ({randomIndex, randomPoster, movie}) => {
    return (
        <>
        <section className="wrapper">
  
  <div className="wrapper_film">
  <img
  key={randomIndex}
  src={randomPoster.poster}
  alt="Movie Poster"
  style={{
    borderRadius: "1vw",
    width: "14vw",
  }}
/>
<p>{movie.title}</p>
</div>


<div className="wrapper_film">
  <img
  key={randomIndex}
  src={randomPoster.poster}
  alt="Movie Poster"
  style={{
    borderRadius: "1vw",
    width: "14vw",
  }}
/>
<p>{movie.title}</p>
</div>


<div className="wrapper_film">
  <img
  key={randomIndex}
  src={randomPoster.poster}
  alt="Movie Poster"
  style={{
    borderRadius: "1vw",
    width: "14vw",
  }}
/>
<p>{movie.title}</p>
</div>
</section>
        </>
    )
}

export default SeeAlso;
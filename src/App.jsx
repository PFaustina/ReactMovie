import React from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import { useState, useEffect } from "react";
import "./index.css";


function App() {

  const apiKey = "529bf2e4"; // variable with your apiKey
  const [movie, setMovie] = useState(null); // state to hold movie data

  // Function to getMovies
  const getMovie = async (searchTerm) => { // "promise" request to my api of fetching the data in the background
    try { // try to do what was promised
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`) // not to hard code the apiKey and movie search we use a "template literals" ${}
      const data = await response.json() // getting my movie
      // console.log(data)
      setMovie(data) // this variable is holding the movie data

    } catch (error) { // catch if it fails
      console.log(error)
    }
  };

  useEffect(() => {
    getMovie("oppenheimer")
  }, []);

  return (
    <>
     {/* Passing the function to Form as a prop and calling it movieSearch */}
      <Form movieSearch={getMovie} /> 
      <MovieDisplay movie={movie} />
    </>
  );
}

export default App;
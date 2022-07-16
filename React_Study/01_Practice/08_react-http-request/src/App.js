import React, {useCallback, useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMoviesHandler = useCallback( async () => {
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch('https://react-http-8e436-default-rtdb.firebaseio.com/movies.json')

      if (!res.ok) {
        throw new Error('Something Went Wrong')
      }

      const data = await res.json()
      
      const loadedMovies = []
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title:data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }
      setMovies(loadedMovies)
    } catch(error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler])

  async function addMovieHandler(movie) {
    const res = await fetch('https://react-http-8e436-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json' // 어떤 컨텐츠가 전달되는지 알 수 있게 해주는 헤더
      }
    })

    const data = await res.json()
    console.log(data)
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found No Movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

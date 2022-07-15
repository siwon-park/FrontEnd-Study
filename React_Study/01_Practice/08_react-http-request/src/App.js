import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  async function fetchMoviesHandler() {
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch('https://swapi.dev/api/films/')
      const data = await res.json()
      if (!res.ok) {
        throw new Error('Something Went Wrong')
      }
        const transformedMoives = data.results.map(md => {
          return {
            id: md.episode_id,
            title: md.title,
            openingText: md.opening_crawl,
            releaseData: md.release_data,
          }
        })
        setMovies(transformedMoives)
    } catch(error) {
      setError(error.message)
    }
    setIsLoading(false)
  }

  return (
    <React.Fragment>
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

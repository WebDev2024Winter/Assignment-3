import React from 'react'
import AddMovie from './components/AddMovie';
import PostMovies from './components/PostMovies'

async function getMovies() {
  const movies = await fetch('http://localhost:3000/api/movies', {
    method: "GET"
  });
    
    if(!movies.ok) {
      console.log("Could not get Movies Database.")
      throw new Error("Failed to fetch data")
    }

    return movies.json();
}

const Main = async () => {
  const movies = await getMovies();
  console.log(movies);
  
  return (
    <div className='bg-red-800'>
        <div className="container mx-auto p-8">
            <div className="flex flex-col bg-red-600 p-12 rounded-lg shadow-md">
              <AddMovie/>
              <PostMovies moviePosts={movies}/>
            </div>
        </div>
    </div>
  )
}

export default Main
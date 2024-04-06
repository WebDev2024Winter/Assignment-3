import React from 'react'
import MoviePost from './MoviePost'

const PostMovies = ({moviePosts}) => {

  return (
    <ul>
        {
        moviePosts.map((post) => (
            <MoviePost moviePost={post} key={post.id}/>
        ))
        }
    </ul>
  )
}

export default PostMovies
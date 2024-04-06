"use client"
import React from 'react'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { useState } from 'react';

const MoviePost = ({moviePost}) => {
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [movieEdit, setMovieEdit] = useState(moviePost);
    const Router = useRouter();
  
    const handleModalChange = (e) => {
        const { name, value } = e.target;
        setMovieEdit((prevMovieEdit) => ({...prevMovieEdit, [name]: value}));
    }

    const handleSubmitEdit = (e) => {
        e.preventDefault();
        console.log(movieEdit);

        fetch(`http://localhost:3000/api/movies/${moviePost.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({movieEdit})
        })
        setShowModalEdit(false);
        Router.refresh();
    }

    const handleDeleteMovie = () => {
      fetch(`http://localhost:3000/api/movies/${moviePost.id}`, {
            method: "DELETE"
        })
        setShowModalDelete(false);
        Router.refresh();
    }

    return (
    <>
    <li className="p-4 my-6 rounded-lg text-black bg-red-400" key={moviePost.id}>
      <h1 className='text-2xl font-bold font-mono'>{moviePost.title}</h1>
      <p><br/>{moviePost.description}<br/><br/></p>
      
      <div className='flex flex-col text-sm justify-between'>
      {
      moviePost.actors.map((actor) => (
      <p>       {actor}</p>
      ))
      }

      <h2 className='font-semibold'>       <br/>Release: {moviePost.release}</h2>
      </div>

      <button
          className="bg-red-900 text-white rounded-lg py-2 px-6 mx-2 mt-4"
          onClick={() => {
            setShowModalEdit(true);
            setMovieEdit(moviePost);
          }}
        >
          Edit
      </button>

      <button
          className="bg-red-900 text-white rounded-lg py-2 px-6 mx-2 mt-4"
          onClick={() => {
            setShowModalDelete(true);
            setMovieEdit(moviePost);
          }}
        >
          Delete
        </button>

        
    <Modal showModal={showModalEdit} setShowModal={setShowModalEdit}>
        <form className="w-full text-black px-6 pb-4" onSubmit={handleSubmitEdit}>
            <h1 className='font-bold'>Edit Movie</h1>
            
            <label>Title: <input
              type="text"
              placeholder="Title"
              name="title"
              className="w-full p-2 m-1 rounded-lg"
              value={movieEdit.title}
              onChange={handleModalChange}
            /></label>
            
            <label>Description: 
            <textarea
              rows="5"
              cols="60"
              placeholder="Description"
              name="description"
              className='w-full p-2 m-1 rounded-lg'
              value={movieEdit.description}
              onChange={handleModalChange}
            /></label>

            <label>Actors: <br/>
            <input
              type="text"
              placeholder="Actor"
              name="Actor1"
              className="w-1/2 p-2 m-1 rounded-lg"
              value={movieEdit.actors[0]}
              onChange={handleModalChange}
            />

            <input
              type="text"
              placeholder="Actor"
              name="Actor2"
              className="w-1/2 p-2 m-1 rounded-lg"
              value={movieEdit.actors[1]}
              onChange={handleModalChange}
            />

            <input
              type="text"
              placeholder="Actor"
              name="Actor3"
              className="w-1/2 p-2 m-1 rounded-lg"
              value={movieEdit.actors[2]}
              onChange={handleModalChange}
            />

            <input
              type="text"
              placeholder="Actor"
              name="Actor4"
              className="w-1/2 p-2 m-1 rounded-lg"
              value={movieEdit.actors[3]}
              onChange={handleModalChange}
            /><br/></label>

            <label>Release: <br/>
            <input
              type="number"
              placeholder="Release"
              name="release"
              className="w-1/2 p-2 m-1 rounded-lg"
              value={movieEdit.release}
              onChange={handleModalChange}
            /></label>

            <button type="submit" className="bg-red-900 text-white font-semibold px-6 py-2 ml-16">
              Save
            </button>

            <button className="bg-red-900 text-white font-semibold px-6 py-2 mx-4"
            onClick={() => setShowModalDelete(false)}>
              Close
            </button>
            
          </form>
        </Modal>

        <Modal showModal={showModalDelete} setShowModal={setShowModalDelete}>
        <div className="flex flex-col bg-red-500 justify-between">
            <h1 className="text-2xl text-black p-6">
              Are you sure you want to delete this Movie?
            </h1>

            <div className="space-x-4">
              <button
                className="bg-red-900 text-white font-bold p-2 px-8 mx-4 rounded-lg"
                onClick={() => handleDeleteMovie(post.id)}
              >
                Yes
              </button>

              <button
                className="bg-green-900 text-white font-bold p-2 px-8 mx-4 rounded-lg"
                onClick={() => setShowModalDelete(false)}
              >
                No
              </button>

            </div>
          </div>

        </Modal>

      </li>
    </>
  )
}

export default MoviePost
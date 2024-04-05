import React from 'react'
import Modal from './Modal'
import Router from 'next/navigation'
import { useState } from 'react';


const MoviePost = ({moviePost}) => {
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [movieEdit, setMovieEdit] = useState({});
    const Router = useRouter();
  
    const handleModalChange = (e) => {
        const { name, value } = e.target;
        setMovieEdit((prevMovieEdit) => ({...prevMovieEdit, [name]: value}));
    }

    const handleSubmitEdit = () => {
        fetch(`http://localhost:3000/api/movies/${moviePost.id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(movieEdit)
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

    <li className="p-4 my-6 rounded-lg text-black bg-red-400" key={moviePost.id}>
      <h1>{moviePost.title}</h1>
      <p>{moviePost.description}</p>
      
      <div className='flex flex-col text-sm justify-between'>
      {
      moviePost.actors.map((actor) => (
      <p>{moviePost.description}</p>
      ))
      }

      <h3>Release: {moviePost.year}</h3>
      </div>

      <button
          className="bg-red-900 text-red-300 mr-3"
          onClick={() => {
            setShowModalEdit(true);
            setMovieToEdit(moviePost);
          }}
        >
          Edit
      </button>

      <button
          className="bg-red-900 text-red-300 mr-3"
          onClick={() => {
            setShowModalDelete(true);
            setMovieToDelete(moviePost);
          }}
        >
          Delete
        </button>

        <Modal showModal={showModalEdit} setShowModal={setShowModalEdit}>
        <form className="w-full text-red-300 px-6 pb-4" onSubmit={handleSubmitEdit}>
            <h1>Edit Movie</h1>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="w-full p-2"
              value={movieEdit.title}
              onChange={handleModalChange}
            />
            <input
              type="text"
              placeholder="description"
              name="description"
              className="w-full h-32 p-2"
              value={movieEdit.description}
              onChange={handleModalChange}
            />

            <div className='flex flex-col'>

            <input
              type="text"
              placeholder="Actor"
              name="Actor1"
              className="w-1/2 p-2"
              value={movieEdit.actors.actor1}
              onChange={handleModalChange}
            />

            <input
              type="text"
              placeholder="Actor"
              name="Actor2"
              className="w-1/2 p-2"
              value={movieEdit.actors.actor2}
              onChange={handleModalChange}
            />

            <input
              type="text"
              placeholder="Actor"
              name="Actor3"
              className="w-1/2 p-2"
              value={movieEdit.actors.actor3}
              onChange={handleModalChange}
            />

            <input
              type="text"
              placeholder="Actor"
              name="Actor4"
              className="w-1/2 p-2"
              value={movieEdit.actors.actor4}
              onChange={handleModalChange}
            />

            </div>

            <input
              type="number"
              placeholder="Release"
              name="release"
              className="w-1/2 p-2"
              value={movieEdit.relese}
              onChange={handleModalChange}
            />

            <button type="submit" className="bg-red-900 text-white px-6 py-2">
              Save
            </button>

          </form>
        </Modal>

        <Modal showModal={showModalDelete} setShowModalDelete={setShowModalDelete}>
        <div className="flex flex-col bg-red-600 justify-between">
            <h1 className="text-2xl text-red-300 p-6">
              Are you sure you want to delete this Movie?
            </h1>

            <div className="space-x-4">
              <button
                className="text-green-300 font-bold"
                onClick={() => handleDeleteMovie(post.id)}
              >
                Yes
              </button>

              <button
                className="text-red-300 font-bold"
                onClick={() => setShowDeleteModal(false)}
              >
                No
              </button>

            </div>
          </div>

        </Modal>

      </li>
  )
}

export default MoviePost
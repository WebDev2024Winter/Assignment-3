import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

const AddMovie = () => {
    const Router = useRouter();
    const [showAddModal, setShowAddModal] = useState(false);
    const [addMovie, setAddMovie] = useState({});
    const [message, setMessage] = useState('');

    const handleModalChange = (e) => {
        const { name, value } = e.target;
        setAddMovie((prevMovie) => ({ ...prevMovie, [name]: value }))
      }

    const handleSubmitAdd = () => {
        const movies = fetch('http://localhost:3000/api/movies');
    
        if(!movies.ok) {
        console.log("Could not get Movies Database.")
        throw new Error("Failed to fetch data")
        }

        movies = movies.json();

        for(var i = 0; i < movies.length; i++)
        {
            if (movies[i].title === addMovie.title &&
                movies[i].release === addMovie.release)
                {
                    setMessage('That Movie Already Exists In the Database!');
                }

                return;
        }

        fetch('http://localhost:3000/api/movies/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({addMovie})
        })
        setAddMovie({});
        setShowAddModalModal(false);
        Router.refresh();
    }

  return (
    <div>
    <button
    onClick={() => setShowAddModal(true)}
    className="bg-red-800 text-white p-4"
    >
    Add New Movie
    </button>

    {message && <div className='text-black font-semibold text-lg'>{message}</div>}

    <Modal showModal={showAddModal} setShowModal={setShowAddModal}>
        <form className="w-full text-red-300 px-6 pb-4" onSubmit={handleSubmitAdd}>
            <h1>Edit Movie</h1>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="w-full p-2"
              value={addMovie.title}
              onChange={handleModalChange}
            />
            <input
              type="text"
              placeholder="description"
              name="description"
              className="w-full h-32 p-2"
              value={addMovie.description}
              onChange={handleModalChange}
            />

            <div className='flex flex-col'>

            <input
              type="text"
              placeholder="Actor"
              name="Actor1"
              className="w-1/2 p-2"
              value={addMovie.actors.actor1}
              onChange={handleModalChange}
            />

            <input
              type="text"
              placeholder="Actor"
              name="Actor2"
              className="w-1/2 p-2"
              value={addMovie.actors.actor2}
              onChange={handleModalChange}
            />

            <input
              type="text"
              placeholder="Actor"
              name="Actor3"
              className="w-1/2 p-2"
              value={addMovie.actors.actor3}
              onChange={handleModalChange}
            />

            <input
              type="text"
              placeholder="Actor"
              name="Actor4"
              className="w-1/2 p-2"
              value={addMovie.actors.actor4}
              onChange={handleModalChange}
            />

            </div>

            <input
              type="number"
              placeholder="Release"
              name="release"
              className="w-1/2 p-2"
              value={addMovie.relese}
              onChange={handleModalChange}
            />

            <button type="submit" className="bg-red-900 text-white px-6 py-2">
              Save
            </button>

          </form>
        </Modal>

    </div>
  )
}

export default AddMovie
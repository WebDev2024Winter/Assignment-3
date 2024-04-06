"use client"
import React from 'react'
import Modal from './Modal'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
  

const AddMovie = () => {
    const Router = useRouter();
    const [showAddModal, setShowAddModal] = useState(false);
    const [currentMovies, setCurrentMovies] = useState([]);
    const [description, setDescription] = useState ({
      title: "Title",
      description: "Description",
      release: 2001
    });
    const [addMovie, setAddMovie] = useState ({
      title: "Title",
      description: "Description",
      actors: [],
      release: 2001
    });
    const [message, setMessage] = useState('');
    let actors = [];


    const handleModalDescription = (e) => {
      e.preventDefault();

      const { name, value } = e.target;
      setDescription((prev) => ({...prev, [name]: value}));
    }

    const handleModalActor = (e) => {
        e.preventDefault();
        const { name, value, id } = e.target;
          
        if (name === "actors")
          actors[id] = value;
        }

    const getMovies = () => {
          fetch('http://localhost:3000/api/movies', {
            method: "GET"
          })
          .then((response) => response.json())
          .then((data) => setCurrentMovies(data));
        }

    const handleSubmitAdd = () => {
        getMovies();

        setAddMovie({...description, actors})
        
        console.log(currentMovies)
        console.log(addMovie)

        for(var i = 0; i < currentMovies.length; i++)
        {
            if (currentMovies[i].title === addMovie.title &&
                currentMovies[i].release === addMovie.release)
                {
                    setMessage('That Movie Already Exists In the Database!');
                }

                return;
        }

        fetch('http://localhost:3000/api/movies/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({addMovie}),
        })
        .then((response) => {
          
        if(!response.ok)
        {
          throw new Error("Unable to Add Movie.");
        }

        setAddMovie({});
        setDescription({});
        actors = [];
        setShowAddModal(false);
        Router.refresh();
        })
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
        <form className="w-full text-black px-6 pb-4" onSubmit={handleSubmitAdd}>
            <h1 className='font-bold'>Add Movie</h1>
            
            <label>Title: <br/></label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="w-full p-2 m-1 rounded-lg"
              value={description.title}
              onChange={handleModalDescription}
            />
            
            <label>Description: <br/></label>
            <textarea
              rows="5"
              cols="60"
              placeholder="Description"
              name="description"
              className='w-full p-2 m-1 rounded-lg'
              value={description.description}
              onChange={handleModalDescription}
            />

            <label>Actors: <br/></label>
            <input
              type="text"
              placeholder="Actor"
              name="actors"
              id="0"
              className="w-1/2 p-2 m-1 rounded-lg"
              value={actors[0]}
              onChange={handleModalActor}
            />

            <input
              type="text"
              placeholder="Actor"
              name="actors"
              id="1"
              className="w-1/2 p-2 m-1 rounded-lg"
              value={actors[1]}
              onChange={handleModalActor}
            />

            <input
              type="text"
              placeholder="Actor"
              name="actors"
              id="2"
              className="w-1/2 p-2 m-1 rounded-lg"
              value={actors[2]}
              onChange={handleModalActor}
            />

            <input
              type="text"
              placeholder="Actor"
              name="actors"
              id="3"
              className="w-1/2 p-2 m-1 rounded-lg"
              value={actors[3]}
              onChange={handleModalActor}
            />

            <label>Release: <br/></label>
            <input
              type="number"
              placeholder="Release"
              name="release"
              className="w-1/2 p-2 m-1 rounded-lg"
              value={description.release}
              onChange={handleModalDescription}
            />

            <button type="submit" className="bg-red-900 text-white font-semibold px-6 py-2 ml-16">
              Save
            </button>

            <button className="bg-red-900 text-white font-semibold px-6 py-2 mx-4"
            onClick={() => setShowAddModal(false)}>
              Close
            </button>

          </form>
        </Modal>

    </div>
  )
}

export default AddMovie
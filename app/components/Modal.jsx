import React from "react";

const Modal = ({ children, showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div className="flex justify-center items-center h-full bg-black/50 fixed inset-0">
            <div className="flex flex-col p-5 bg-red-500 w-1/2 p-s">
              <button
                onClick={() => setShowModal(false)}
                className="flex flex-col items-end text-xl mb-4 px-2"
              >
                &times;
              </button>
              {children}
            </div>
        </div>
      )}
    </>
  );
};

export default Modal;

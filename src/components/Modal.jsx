import React from 'react'

const Modal = ({ info, modalId }) => {
    return (
        <div className="modal-comp">
            <span
                role="img"
                aria-label="Open Modal"
                className="emoji-icon"
                onClick={() => document.getElementById(modalId).showModal()}
            >
                ℹ️
            </span>

            <dialog id={modalId} className="modal">
                <div className="modal-box">
                    <p className="py-4">{info}</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default Modal


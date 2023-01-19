import React, { useState } from "react";
import './modal.css';

const Modal = ({title, description, buttonText}) => {
const [isClosed, setIsClosed] = useState(false);
const handleClick = () => {
    setIsClosed(!isClosed)
}
    return(

        <div className="container__modal">
            <div className="container__modal-text">
                <span className="modal-title">{title}</span>
                <span>{description}</span>
            </div>
            <button className="modal-btn" onClick={handleClick}>{buttonText}</button>
        </div>
    )
}

export default Modal;

import React from "react";
import ReactDOM from "react-dom";
export const Modal = ({ handleClose }) => {
	return ReactDOM.createPortal(
		<div>
			<div
				onClick={handleClose}
				className="absolute inset-0 bg-gray-300 opacity-80"
			></div>
			<div className="absolute inset-40 p-10 bg-white">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ut quos
				ipsum reprehenderit facilis hic ratione!
			</div>
		</div>,
		document.querySelector(".modal-container")
	);
};

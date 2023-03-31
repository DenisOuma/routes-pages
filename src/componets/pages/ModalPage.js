import React, { useState } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";

export const ModalPage = () => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal((current) => !current);
	};
	const onClose = () => {
		setShowModal((current) => !current);
	};
	return (
		<div className="relative">
			<Button onClick={handleClick} primary rounded>
				Open Modal
			</Button>
			{showModal && <Modal handleClose={onClose} />}
		</div>
	);
};

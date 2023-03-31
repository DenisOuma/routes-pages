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
	const acceptTerms = (
		<div>
			<Button onClick={onClose} primary>
				I Accept
			</Button>
		</div>
	);

	const modal = (
		<Modal handleClose={onClose} actionBar={acceptTerms}>
			<p>Here is an important agreement for you to accept</p>
		</Modal>
	);

	return (
		<div className="relative">
			<Button onClick={handleClick} primary rounded>
				Open Modal
			</Button>
			{showModal && modal}
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et
				eveniet autem architecto praesentium tempora animi minus vitae nesciunt
				deserunt.
			</p>
		</div>
	);
};

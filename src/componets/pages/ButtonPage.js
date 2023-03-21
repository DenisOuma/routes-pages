import React from "react";
import {
	GoHeart,
	GoTrashcan,
	GoSmiley,
	GoIssueOpened,
	GoMarkGithub,
} from "react-icons/go";
import { Button } from "../Button";
export const ButtonPage = () => {
	const handleClick = () => {
		console.log("Button Clicked");
	};
	return (
		<div>
			<div>
				<Button outline primary onClick={handleClick} className="mb-7">
					<GoHeart />
					primary!
				</Button>
			</div>
			<div>
				<Button secondary rounded>
					<GoMarkGithub />
					Secondary!
				</Button>
			</div>
			<div>
				<Button warning>
					<GoIssueOpened />
					Warning!
				</Button>
			</div>
			<div>
				<Button success rounded>
					<GoSmiley /> Success!
				</Button>
			</div>
			<div>
				<Button danger rounded>
					<GoTrashcan />
					Danger!
				</Button>
			</div>
		</div>
	);
};

import React from "react";
import { Button } from "./componets/Button";

export const App = () => {
	return (
		<div>
			<div>
				<Button primary rounded outlined>
					primary!
				</Button>
			</div>
			<div>
				<Button secondary outlined rounded>
					Secondary!
				</Button>
			</div>
			<div>
				<Button warning>Warning!</Button>
			</div>
			<div>
				<Button success outline>
					Success!
				</Button>
			</div>
			<div>
				<Button danger rounded>
					Danger!
				</Button>
			</div>
		</div>
	);
};

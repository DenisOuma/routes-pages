import React from "react";
import { Button } from "./componets/Button";

export const App = () => {
	return (
		<div>
			<div>
				<Button>primary</Button>
			</div>
			<div>
				<Button>Secondary</Button>
			</div>
			<div>
				<Button>Success</Button>
			</div>
			<div>
				<Button>Danger</Button>
			</div>
			<div>
				<Button>Welcome</Button>
			</div>
		</div>
	);
};

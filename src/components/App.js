import React from "react";
import Nav from "./Nav";
import PigPen from "./PigPen"

import pigs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<PigPen pigs={pigs}/>
		</div>
	);
}

export default App;

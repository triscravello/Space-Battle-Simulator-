import { useState } from "react";
import SpaceBattleSimulator from "./SpaceBattleSimulator";
import "./App.css";

function App ()
{
	return (
		<div className="App">
			<SpaceBattleSimulator minDamage={5} maxDamage={20} />
		</div>
	);
}

export default App;

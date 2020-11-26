import React from "react";
import "app.css";
import Sidebar from "Sidebar";
import Chat from "Chat";

function App(){
	return (
		<div className="app">
		

		<div className="app_body">
		<sidebar />
		<chat />
		</div>
		</div>
		);
}


export default App;
import React from 'react';
import {Avatar} from "@material-ui/core";
import "SidebarChat.css";
 
 function SidebarChat({addNewChat}){
 	const [seed, setSeed] = useState("");

 	useEffect(() => {
 		setSeed(Math.floor(Math.random() * 5000));
 	}, []);

 	const createChat = {} => {
 		const roomName = prompt("Please enter name for chat");

 		if(roomName){
 			
 		}
 	};
 }
function SidebarChat() {
	return !addNewChat ? (
		<div className="sidebarChat">
			<Avatar src="http://avatars.dicebear.com/apiu/human/${seed}.svg" />
			<div className="sidebarChat_info">
			<h2>Room Name</h2>
			<p>Last Message...</p>
			</div>
		</div>
	): (
		<div onClick={createChat}
		className="sidebarChat">
         <h2>Add new Chat</h2>
		</div>
	);
}

export default SidebarChat;
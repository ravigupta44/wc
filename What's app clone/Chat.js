
import {Avatar, IconButton} from "@material-ui/core";
import {AttachFile, moreVert, SearchOutlined } from 

import React, {useState, useEffect } from 'react'
import "Chat.css";

function Chat() {
	const [seed, setSeed] = useState("");

	useEffect(() => {
		setSeed(Math.floor(Math.random()* 5000));
	}, []);
	return (
		<div className = "chat">
			<div className="chat_header">
			<Avatar src="https://avatars.dicebear.com/apiu/human/${seed}.svg"/>

			<div className="chat_headerInfo">
				<h3>Room name</h3>
				<p>Last seen at ....</p>
			</div>

			<div className="chat_headerRight">

			</div>
			</div>
			<div className="chat_body">

			</div>
			<div className="chat_footer">

			</div>
		</div>
	)
}

export default Chat;
import { Id } from "@core";
import { useState } from "react";
import Message from "@/model/Message";
import talk from "@/functions/chat";
import useLocalStorage from "./useLocalStorage";

export default function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.generate());
	const [messages, setMessages] = useLocalStorage<Message[]>("mensagens", []);
	const [thinking, setThinking] = useState(false);

	async function addMessage(text: string) {
		try {
			setThinking(true);
			const newMessage: Message = {
				id: Id.generate(),
				text,
				author: "Visitante",
				side: "right",
			};

			setMessages((msgs) => [...msgs, newMessage]);

			const response = await talk(chatId, newMessage);

			console.log("respondeu?", response);

			if (!response) return;

			const responseMessage: Message = {
				id: Id.generate(),
				text: response,
				author: "Assistente",
				side: "left",
			};

			setMessages((msgs) => [...msgs, responseMessage]);
		} finally {
			setThinking(false);
		}
	}

	function clearMessage() {
		setMessages([]);
	}

	return {
		chatId,
		messages,
		thinking,
		addMessage,
		clearMessage,
	};
}

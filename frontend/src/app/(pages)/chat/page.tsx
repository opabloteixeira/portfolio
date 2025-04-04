"use client";
import ConteudoMD from "@/components/shared/ContentMD";
import useChat from "@/hooks/useChat";
import Image from "next/image";
import { useState } from "react";

export default function Chat() {
	const { chatId, addMessage, clearMessage, messages, thinking } = useChat();
	const [texto, setTexto] = useState("");
	return (
		<div>
			<h1>Chat</h1>
			<h2>Chat ID: {chatId}</h2>
			<button onClick={clearMessage}>Limpar</button>

			<ul>
				{messages.map((m) => (
					<li key={m.id} className="flex flex-col gap-2">
						<div>{m.author}</div>
						<ConteudoMD markdown={m.text} />
					</li>
				))}
			</ul>

			{thinking && (
				<div>
					<Image src="/waiting.gif" alt="Pensando" width={50} height={50} />
				</div>
			)}

			<input
				type="text"
				value={texto}
				className="border border-gray-700 rounded p-2"
				onChange={(e: any) => {
					setTexto(e.target.value);
				}}
				onKeyDown={(e: any) => {
					if (e.key === "Enter") {
						addMessage(texto);
						setTexto("");
					}
				}}
			/>
		</div>
	);
}

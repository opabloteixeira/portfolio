"use server";
import Message from "@/model/Message";

export default async function talk(chatId: string, message: Message): Promise<string | null> {
	console.log("chatIdEntrou: ", chatId);
	console.log("messageENTROU: ", message);

	const webhookUrl = process.env.CHAT_WEBHOOK;
	if (!webhookUrl) return null;

	const response = await fetch(webhookUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			chatId,
			message: message.text,
		}),
	});

	console.log("response: ", response);

	const msg = await response.json();

	console.log("menssagem: ", msg.response);

	return msg.response;
}

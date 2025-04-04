import Message from "@/model/Message";
import ContentMD from "../shared/ContentMD";
import Image from "next/image";

export interface ItemMessageProps {
	message: Message;
	omitAuthor?: boolean;
}

export default function ItemMessage(props: ItemMessageProps) {
	return props.message.side === "left" ? <LeftButton {...props} /> : <RightButton {...props} />;
}

function LeftButton(props: ItemMessageProps) {
	return (
		<div className="flex gap-4">
			{!props.omitAuthor && <Image src="/chat.svg" alt="Assistente" width={40} height={40} />}
			<div className={`flex flex-col ${props.omitAuthor && "pl-16"}`}>
				{!props.omitAuthor && (
					<span className="text-xs text-zinc-600">{props.message.author}</span>
				)}
				<div className="bg-black text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded-bl-3xl">
					<ContentMD markdown={props.message.text} />
				</div>
			</div>
		</div>
	);
}

function RightButton(props: ItemMessageProps) {
	return (
		<div className={`flex flex-col items-end ${props.omitAuthor && "pr-2"}`}>
			{!props.omitAuthor && (
				<span className="text-xs text-zinc-600">{props.message.author}</span>
			)}
			<div className="bg-red-700 text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl">
				<ContentMD markdown={props.message.text} />
			</div>
		</div>
	);
}

import { ReactNode } from "react";

export default interface Message {
	id: string;
	text: string;
	author: string;
	side: "left" | "right";
	icon?: ReactNode;
}

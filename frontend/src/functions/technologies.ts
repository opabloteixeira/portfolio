import { Technology } from "@core";
import { httpGet } from "./api";

export async function getTechnologies() {
	const technologies: Technology[] = await httpGet("/technologies");

	return {
		all: technologies,
		get highlights() {
			return technologies.filter((t) => t.highlight);
		},
	};
}

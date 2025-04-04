import { Project, Type } from "@core";
import { httpGet } from "./api";

export async function getProjects() {
	const projects: Project[] = await httpGet("/projects");

	return {
		all: projects,
		get mobile() {
			return projects.filter((p) => p.type === Type.MOBILE);
		},
		get web() {
			return projects.filter((p) => p.type === Type.WEB);
		},
		get games() {
			return projects.filter((p) => p.type === Type.GAME);
		},
		get highlights() {
			return projects.filter((p) => p.highlight);
		},
	};
}

export async function getById(id: string): Promise<Project | null> {
	return await httpGet(`/projects/${id}`);
}

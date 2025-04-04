import { Controller, Get, Param } from "@nestjs/common";
import { ProjectPrisma } from "./project.prisma";
import Project from "../../../core/src/project/Project";

@Controller("projects")
export class ProjectController {
	constructor(private readonly repo: ProjectPrisma) {}

	@Get()
	async getAll(): Promise<Project[]> {
		return this.repo.getAll();
	}
	@Get(":id")
	async getById(@Param("id") id: string): Promise<Project | null> {
		return this.repo.getById(Number(id));
	}
}

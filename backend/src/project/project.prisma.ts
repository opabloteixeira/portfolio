import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';
import Project from '../../../core/src/project/Project';

@Injectable()
export class ProjectPrisma {
    constructor(private readonly prisma: PrismaProvider){}

    async getAll(): Promise<Project[]> {
        return this.prisma.projects.findMany() as any;
    }

    async getById(id: number): Promise<Project | null> {
        console.log('chamou',  id);
        return this.prisma.projects.findUnique({
            where: { id },
            include: { technologies: true },
        }) as any;
    }
}
 
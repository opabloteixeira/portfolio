import { Controller, Get } from '@nestjs/common';
import { Technology } from '@core';
import { TechnologyPrisma } from './technology.prisma';

@Controller('technologies')
export class TechnologyController {
    constructor(private readonly repo: TechnologyPrisma){}

    @Get()
    async getAll(): Promise<Technology[]> {
        return this.repo.getAll();
    }

    @Get("highlights")
    async getHighlights(): Promise<Technology[]> {
        return this.repo.getHighLights();
    }
}

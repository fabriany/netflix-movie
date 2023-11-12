import { Controller, Get, Param, Put, Body, Delete, Post } from '@nestjs/common';
import { CreatePlatformDto, UpdatePlatformDto } from '../dtos/platforms.dtos';
import { PlatformsService } from '../services/platforms.service'
@Controller('platforms')
export class PlatformsController {
    constructor(private platformsService: PlatformsService) {}

    @Get()
    getAllPlatforms(): any {
        return this.platformsService.findAll();
    }

    @Get(':id')
    getPlatformById(@Param('id') id: string): any {
        return this.platformsService.findOne(+id);
    }

    @Post()
    createPlatform(@Body() createPlatformDto: CreatePlatformDto): any {
        return this.platformsService.create(createPlatformDto);
    }

    @Put(':id')
    updatePlatform(@Param('id') id: string, @Body() updatePlatformDto: UpdatePlatformDto): any {
        return this.platformsService.update(+id, updatePlatformDto);
    }

    @Delete(':id')
    deletePlatform(@Param('id') id: string): any {
        return this.platformsService.delete(+id);
    }
}

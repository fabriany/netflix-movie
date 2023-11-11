import { Controller, Get, Param, Put, Body, Delete, Post } from '@nestjs/common';

@Controller('platforms')
export class PlatformsController {
    @Get()
    getAllPlatforms(): any {
        return 'Platforms'
    }

    @Get(':id')
    getPlatformById(@Param('id') id: string): any {
        return `Platform: ${id}`
    }

    @Post()
    createPlatform(@Body() createPlatformDto: any): any {
        return `crear Platform`
    }

    @Put(':id')
    updatePlatform(@Param('id') id: string, @Body() updatePlatformDto: any): any {
        return `Update Platform: ${id}`
    }

    @Delete(':id')
    deletePlatform(@Param('id') id: string): any {
        return `delete Platform: ${id}`
    }
}

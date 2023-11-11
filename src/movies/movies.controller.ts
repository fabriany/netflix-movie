import { Controller, Get, Param, Put, Body, Delete, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAllMovies(): any {
        return 'Peliculas'
    }

    @Get(':id')
    getMovieById(@Param('id') id: string): any {
        return `Pelicula: ${id}`
    }

    @Post()
    createMovie(@Body() createMovieDto: any): any {
        return `crear Pelicula`
    }

    @Put(':id')
    updateMovie(@Param('id') id: string, @Body() updateMovieDto: any): any {
        return `Update Pelicula: ${id}`
    }

    @Delete(':id')
    deleteMovie(@Param('id') id: string): any {
        return `delete Pelicula: ${id}`
    }
}

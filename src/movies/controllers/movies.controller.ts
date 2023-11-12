import { Controller, Get, Param, Put, Body, Delete, Post } from '@nestjs/common';
import { CreateMovieDto, UpdateMovieDto } from '../dtos/movies.dtos';
import { MoviesService } from '../services/movies.service'

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) {}
    
    @Get()
    getAllMovies(): any {
        return this.moviesService.findAll();
    }

    @Get(':id')
    getMovieById(@Param('id') id: string): any {
        return this.moviesService.findOne(+id);
    }

    @Post()
    createMovie(@Body() createMovieDto: CreateMovieDto): any {
        return this.moviesService.create(createMovieDto);
    }

    @Put(':id')
    updateMovie(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto): any {
        return this.moviesService.update(+id, updateMovieDto);
    }

    @Delete(':id')
    deleteMovie(@Param('id') id: string): any {
        return this.moviesService.delete(+id);
    }
}

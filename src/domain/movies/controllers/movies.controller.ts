import { Controller,
         Get, 
         Param, 
         Put, 
         Body, 
         Delete, 
         Post, 
         Query
        } from '@nestjs/common';

import { CreateMovieDto, UpdateMovieDto, FilterMoviesDto } from '../dtos/movies.dtos';
import { MoviesService } from '../services/movies.service'
import { MongoIdPipe } from '../common/mongo-id.pipe'

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) {}
    
    @Get()
    async getAllMovies(@Query() paramas: FilterMoviesDto) {
        return await this.moviesService.findAll(paramas);
    }

    @Get(':id')
    getMovieById(@Param('id', MongoIdPipe) id: string) {
        return this.moviesService.findOne(id);
    }

    @Post()
    createMovie(@Body() createMovieDto: CreateMovieDto) {
        return this.moviesService.create(createMovieDto);
    }

    @Put(':id')
    updateMovie(@Param('id', MongoIdPipe) id: string, @Body() updateMovieDto: UpdateMovieDto) {
        return this.moviesService.update(id, updateMovieDto);
    }

    @Delete(':id')
    deleteMovie(@Param('id', MongoIdPipe) id: string) {
        return this.moviesService.delete(id);
    }
}

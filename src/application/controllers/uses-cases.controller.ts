import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  Delete,
  Post,
  Query,
} from '@nestjs/common';

import {
  CreateMovieDto,
  UpdateMovieDto,
  FilterMoviesDto,
} from '../dtos/movies.dto';
import { MoviesService } from '../../domain/movies/services/movies.service';
import { UseCasesService } from '../services/use-cases.service';
import { MongoIdPipe } from '../common/mongo-id.pipe';
import { CreateReviewDto } from '../dtos/reviews.dto';

@Controller('movies')
export class UsesCasesController {
  constructor(
    private moviesService: MoviesService,
    private useCasesService: UseCasesService,
  ) {}

  @Get()
  async getAllMovies(@Query() paramas: FilterMoviesDto) {
    return await this.moviesService.findAll(paramas);
  }

  @Get(':id')
  async getMovieById(@Param('id', MongoIdPipe) id: string) {
    return await this.moviesService.findOne(id);
  }

  @Get(':id/reviews')
  async getReviewMovieById(@Param('id', MongoIdPipe) id: string) {
    const movie = await this.moviesService.findOne(id);
    return this.useCasesService.getReviewsForPlatforms(movie);
  }

  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Post(':id/clone')
  async cloneMovie(@Param('id', MongoIdPipe) id: string) {
    return await this.useCasesService.cloneMovie(id);
  }

  @Post('/review')
  addReview(@Body() createReviewDto: CreateReviewDto) {
    return this.useCasesService.createReview(createReviewDto);
  }

  @Put(':id')
  updateMovie(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  deleteMovie(@Param('id', MongoIdPipe) id: string) {
    return this.moviesService.delete(id);
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { MoviesController } from './controllers/movies.controller';
import { MoviesService } from './services/movies.service';
import { Movie, MovieSchema } from './entities/movie.entity';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Movie.name,
      schema: MovieSchema
    }
  ])],
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule {}

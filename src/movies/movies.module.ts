import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { MoviesController } from './controllers/movies.controller';
import { MoviesService } from './services/movies.service';
import { Movie, MovieSchema } from './entities/movie.entity';
import { Platform, PlatformSchema } from './entities/platform.entity';
import { Review, ReviewSchema } from './entities/review.entity';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Movie.name,
      schema: MovieSchema
    },
    {
      name: Platform.name,
      schema: PlatformSchema
    },
    {
      name: Review.name,
      schema: ReviewSchema
    }
  ])],
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule {}

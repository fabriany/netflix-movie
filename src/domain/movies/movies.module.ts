import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MoviesService } from './services/movies.service';
import { Movie, MovieSchema } from './entities/movie.entity';
import { Platform, PlatformSchema } from './entities/platform.entity';
import { Review, ReviewSchema } from './entities/review.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Movie.name,
        schema: MovieSchema,
      },
      {
        name: Platform.name,
        schema: PlatformSchema,
      },
      {
        name: Review.name,
        schema: ReviewSchema,
      },
    ]),
  ],
  providers: [MoviesService],
  exports: [MoviesService],
})
export class MoviesModule {}

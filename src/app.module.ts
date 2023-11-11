import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { PlatformsModule } from './platforms/platforms.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [MoviesModule, PlatformsModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

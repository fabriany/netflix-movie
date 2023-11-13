import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { PlatformsModule } from './platforms/platforms.module';
import { ReviewModule } from './reviews/reviews.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './config';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [appConfig]
    }),
    MoviesModule, 
    PlatformsModule, 
    ReviewModule, 
    DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

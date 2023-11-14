import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './domain/movies/movies.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './config';
import { UseCasesModule } from './application/application.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [appConfig]
    }),
    MoviesModule, 
    DatabaseModule, UseCasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

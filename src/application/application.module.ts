import { Module } from '@nestjs/common';

import { UseCasesService } from './services/use-cases.service';
import { UsesCasesController } from './controllers/uses-cases.controller';
import { MoviesModule } from '../domain/movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [UsesCasesController],
  providers: [UseCasesService],
})
export class UseCasesModule {}

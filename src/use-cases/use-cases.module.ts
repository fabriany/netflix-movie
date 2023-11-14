import { Module } from '@nestjs/common';
import { UseCasesService } from './services/use-cases.service';

@Module({
  providers: [UseCasesService]
})
export class UseCasesModule {}

import { Module } from '@nestjs/common';
import { PlatformsController } from './controllers/platforms.controller';
import { PlatformsService } from './services/platforms.service';

@Module({
  controllers: [PlatformsController],
  providers: [PlatformsService]
})
export class PlatformsModule {}

import { Module } from '@nestjs/common';
import { ReviewsController } from './controllers/reviews.controller';
import { ReviewService } from './services/reviews.service';

@Module({
  controllers: [ReviewsController],
  providers: [ReviewService]
})
export class ReviewModule {}

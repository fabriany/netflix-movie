import { Controller, Get, Param, Put, Body, Delete, Post  } from '@nestjs/common';
import { CreateReviewDto, UpdateReviewDto } from '../dtos/reviews.dtos';
import { ReviewService } from '../services/reviews.service';

@Controller('reviews')
export class ReviewsController {
    constructor(private reviewService: ReviewService) {}

    @Get()
    getAllReviews(): any {
        return this.reviewService.findAll();
    }

    @Get(':id')
    getReviewById(@Param('id') id: string): any {
        return this.reviewService.findOne(+id);
    }

    @Post()
    createReview(@Body() createReviewDto: CreateReviewDto): any {
        return this.reviewService.create(createReviewDto);
    }

    @Put(':id')
    updateReview(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto): any {
        return this.reviewService.update(+id, updateReviewDto);
    }

    @Delete(':id')
    deleteReview(@Param('id') id: string): any {
        return this.reviewService.delete(+id);
    }
}

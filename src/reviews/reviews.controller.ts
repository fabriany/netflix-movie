import { Controller, Get, Param, Put, Body, Delete, Post  } from '@nestjs/common';

@Controller('reviews')
export class ReviewsController {
    @Get()
    getAllReviews(): any {
        return 'Reviews'
    }

    @Get(':id')
    getReviewById(@Param('id') id: string): any {
        return `Review: ${id}`
    }

    @Post()
    createReview(@Body() createReviewsDto: any): any {
        return `crear Review`
    }

    @Put(':id')
    updateReview(@Param('id') id: string, @Body() updateReviewDto: any): any {
        return `Update Review: ${id}`
    }

    @Delete(':id')
    deleteReview(@Param('id') id: string): any {
        return `delete Review: ${id}`
    }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto, UpdateReviewDto } from '../dtos/reviews.dtos';
import { Review } from '../entities/review.entity';

@Injectable()
export class ReviewService {
    private counterID = 1;
    private reviews: Review[] = [{
        id: 1,
        movie: 89,
        platform: 1,
        author: 'Fabriany Orrego',
        body: 'Una obra de arte!',
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
    }]

    findAll() {
        return this.reviews;
    }

    findOne (id: number) {
        const review = this.reviews.find((review) => review.id == id);
        if (!review) {
            throw new NotFoundException(`The review with Id #${id} does not exist`);
        }
        return review;
    }

    create (payload: CreateReviewDto) {
        const newReview = {
            id: this.counterID,
            ...payload
        }
        this.reviews.push(newReview);
        this.counterID += 1
        return newReview
    }

    update (id: number, payload: UpdateReviewDto) {
        const review = this.findOne(id);
        if (review) {
            const index = this.reviews.findIndex((review) => review.id == id);
            this.reviews[index] = {
                ...review,
                ...payload
            };
            return this.reviews[index];
        } else {
            return null;
        }
    }

    delete(id: number) {
        const index = this.reviews.findIndex((review) => review.id == id);
        if (index === -1) {
            throw new NotFoundException(`The review with Id #${id} does not exist`);
        }
        this.reviews.splice(index, 1)
        return true;
    }
}

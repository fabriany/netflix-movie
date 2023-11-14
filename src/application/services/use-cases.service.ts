import { Injectable } from '@nestjs/common';
import { Movie } from 'src/domain/movies/entities/movie.entity';
import { MoviesService } from 'src/domain/movies/services/movies.service';
import { CreateReviewDto } from '../dtos/reviews.dto';

@Injectable()
export class UseCasesService {
    constructor(private moviesService: MoviesService) {}

    async getReviewsForPlatforms(movie: Movie) {
        let reviewsForPlatforms = {};
        movie.reviews.forEach((review) => {
            const plataformaId = review.platform;
            if (!reviewsForPlatforms[plataformaId]) {
                reviewsForPlatforms[plataformaId] = {
                    platform: plataformaId,
                    reviews: [],
                };
            }
            reviewsForPlatforms[plataformaId].reviews.push(review);
        })
        return reviewsForPlatforms
    }
    

    async createReview(review: CreateReviewDto) {
        let movie = await this.moviesService.findOne(review.movie);
        movie.reviews.push(review);
        return movie.save();
    }

    async cloneMovie(id: string) {
        let movie = await this.moviesService.findOne(id);
        const movieObject = movie.toObject();
        delete movieObject._id;
        return this.moviesService.create(movieObject);
    }
}

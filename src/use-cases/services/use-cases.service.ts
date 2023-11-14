import { Injectable } from '@nestjs/common';
import { Movie } from 'src/domain/movies/entities/movie.entity';

@Injectable()
export class UseCasesService {
    getReviewsForPlatforms(movie: Movie) {
        console.log(movie);
    }
}

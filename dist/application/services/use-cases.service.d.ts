/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Movie } from 'src/domain/movies/entities/movie.entity';
import { MoviesService } from '../../domain/movies/services/movies.service';
import { CreateReviewDto } from '../dtos/reviews.dto';
export declare class UseCasesService {
    private moviesService;
    constructor(moviesService: MoviesService);
    getReviewsForPlatforms(movie: Movie): Promise<{}>;
    createReview(review: CreateReviewDto): Promise<import("mongoose").Document<unknown, {}, Movie> & Movie & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    cloneMovie(id: string): Promise<import("mongoose").Document<unknown, {}, Movie> & Movie & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

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
import { CreateMovieDto, UpdateMovieDto, FilterMoviesDto } from '../dtos/movies.dto';
import { MoviesService } from '../../domain/movies/services/movies.service';
import { UseCasesService } from '../services/use-cases.service';
import { CreateReviewDto } from '../dtos/reviews.dto';
export declare class UsesCasesController {
    private moviesService;
    private useCasesService;
    constructor(moviesService: MoviesService, useCasesService: UseCasesService);
    getAllMovies(paramas: FilterMoviesDto): Promise<(import("mongoose").Document<unknown, {}, import("../../domain/movies/entities/movie.entity").Movie> & import("../../domain/movies/entities/movie.entity").Movie & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getMovieById(id: string): Promise<import("mongoose").Document<unknown, {}, import("../../domain/movies/entities/movie.entity").Movie> & import("../../domain/movies/entities/movie.entity").Movie & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getReviewMovieById(id: string): Promise<{}>;
    createMovie(createMovieDto: CreateMovieDto): Promise<import("mongoose").Document<unknown, {}, import("../../domain/movies/entities/movie.entity").Movie> & import("../../domain/movies/entities/movie.entity").Movie & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    cloneMovie(id: string): Promise<import("mongoose").Document<unknown, {}, import("../../domain/movies/entities/movie.entity").Movie> & import("../../domain/movies/entities/movie.entity").Movie & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addReview(createReviewDto: CreateReviewDto): Promise<import("mongoose").Document<unknown, {}, import("../../domain/movies/entities/movie.entity").Movie> & import("../../domain/movies/entities/movie.entity").Movie & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateMovie(id: string, updateMovieDto: UpdateMovieDto): Promise<import("mongoose").Document<unknown, {}, import("../../domain/movies/entities/movie.entity").Movie> & import("../../domain/movies/entities/movie.entity").Movie & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteMovie(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("../../domain/movies/entities/movie.entity").Movie> & import("../../domain/movies/entities/movie.entity").Movie & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("../../domain/movies/entities/movie.entity").Movie> & import("../../domain/movies/entities/movie.entity").Movie & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../../domain/movies/entities/movie.entity").Movie, "findOneAndDelete">;
}

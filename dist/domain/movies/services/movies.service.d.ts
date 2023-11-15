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
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreateMovieDto, UpdateMovieDto, FilterMoviesDto } from '../../../application/dtos/movies.dto';
import { Movie } from '../entities/movie.entity';
export declare class MoviesService {
    private movieModel;
    constructor(movieModel: Model<Movie>);
    findAll(paramas?: FilterMoviesDto): Promise<(import("mongoose").Document<unknown, {}, Movie> & Movie & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Movie> & Movie & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(payload: CreateMovieDto): Promise<import("mongoose").Document<unknown, {}, Movie> & Movie & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, payload: UpdateMovieDto): Promise<import("mongoose").Document<unknown, {}, Movie> & Movie & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Movie> & Movie & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, Movie> & Movie & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Movie, "findOneAndDelete">;
    transformMovie(movie: Movie): Movie;
    getSlug(title: string): string;
    getScore(reviews: any): number;
}

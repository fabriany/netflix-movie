import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { CreateMovieDto, UpdateMovieDto, FilterMoviesDto } from '../dtos/movies.dtos';
import { Movie } from '../entities/movie.entity'

@Injectable()
export class MoviesService {
   constructor(
    @InjectModel(Movie.name) private movieModel: Model<Movie>
   ) {}

   async findAll(paramas?: FilterMoviesDto) {
        if (paramas) {
            const { limit, offset } = paramas;
            return await this.movieModel.find().skip(offset).limit(limit).exec();;
        }
        return await this.movieModel.find().exec();;
    }

    async findOne (id: string) {
        const movie = await this.movieModel.findById(id).exec();
        if (!movie) {
            throw new NotFoundException(`The movie with Id #${id} does not exist`);
        }
        return movie;
    }

    async create (payload: CreateMovieDto) {
        let newMovie = await new this.movieModel(payload);
        this.transformMovie(newMovie);
        return newMovie.save();
    }

    update (id: string, payload: UpdateMovieDto) {
        const movie = this.movieModel
            .findByIdAndUpdate(id, { $set: payload }, { new: true})
            .exec();
        if (!movie) {
            throw new NotFoundException(`The movie with Id #${id} does not exist`);
        }
        return movie;
    }

    delete(id: string) {
        return this.movieModel.findByIdAndDelete(id);
    }

    transformMovie(movie: Movie) {
        movie.slug = this.getSlug(movie.title);
        movie.score = this.getScore(movie.reviews);

        return movie;
    }

    getSlug(title: string): string{
        const cleanedTitle = title.toLowerCase().replace(/[^\w\s]/gi, '');
        const slug = cleanedTitle.replace(/\s+/g, '-');
        return slug;
    }

    getScore(reviews) {
        if (!reviews || reviews.length === 0) {
          return 0; 
        }
        const totalScore = reviews.reduce((total, review) => total + review.score, 0);
        const promedio = totalScore / reviews.length;
        return promedio;
      }
}

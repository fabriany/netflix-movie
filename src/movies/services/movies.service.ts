import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto, UpdateMovieDto } from '../dtos/movies.dtos';
import { Movie } from '../entities/movie.entity'

@Injectable()
export class MoviesService {
    private counterID = 1;
    private movies: Movie[] = [{
        id: 89,
        title: 'El tigre y la nieve',
        slug: 'El-tigre-y-la-nieve',
        image: 'El-tigre-y-la-nieve.jpg',
        director: 'Pengano italiano',
        platforms: [{id: 1, icon: 'netflix-icon.jpg', title: 'Netflix', createdAt: new Date(), updatedAt: new Date()}],
        score: 5,
        createdAt: new Date(), 
        updatedAt: new Date(),
        reviews: [{id: 23,
            movie: 89,
            platform: 1,
            author: 'Fabriany Orrego',
            body: 'Una verdadera obra de arte!',
            score: 5,
            createdAt: new Date(),
            updatedAt: new Date()}]
    }]

    findAll() {
        return this.movies;
    }

    findOne (id: number) {
        const movie = this.movies.find((movie) => movie.id == id);
        if (!movie) {
            throw new NotFoundException(`The movie with Id #${id} does not exist`);
        }
        return movie;
    }

    create (payload: CreateMovieDto) {
        const newMovie = {
            id: this.counterID,
            ...payload
        }
        this.movies.push(newMovie);
        this.counterID += 1
        return newMovie
    }

    update (id: number, payload: UpdateMovieDto) {
        const movie = this.findOne(id);
        if (movie) {
            const index = this.movies.findIndex((movie) => movie.id == id);
            this.movies[index] = {
                ...movie,
                ...payload
            };
            return this.movies[index];
        } else {
            return null;
        }
    }

    delete(id: number) {
        const index = this.movies.findIndex((movie) => movie.id == id);
        if (index === -1) {
            throw new NotFoundException(`The movie with Id #${id} does not exist`);
        }
        this.movies.splice(index, 1)
        return true;
    }
}

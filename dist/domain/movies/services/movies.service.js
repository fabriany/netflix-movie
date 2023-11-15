"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const movie_entity_1 = require("../entities/movie.entity");
let MoviesService = class MoviesService {
    constructor(movieModel) {
        this.movieModel = movieModel;
    }
    async findAll(paramas) {
        if (paramas) {
            const { limit, offset } = paramas;
            return await this.movieModel.find().skip(offset).limit(limit).exec();
        }
        return await this.movieModel.find().exec();
    }
    async findOne(id) {
        const movie = await this.movieModel.findById(id).exec();
        if (!movie) {
            throw new common_1.NotFoundException(`The movie with Id #${id} does not exist`);
        }
        return movie;
    }
    async create(payload) {
        const newMovie = new this.movieModel(payload);
        this.transformMovie(newMovie);
        return newMovie.save();
    }
    update(id, payload) {
        const movie = this.movieModel
            .findByIdAndUpdate(id, { $set: payload }, { new: true })
            .exec();
        if (!movie) {
            throw new common_1.NotFoundException(`The movie with Id #${id} does not exist`);
        }
        return movie;
    }
    delete(id) {
        return this.movieModel.findByIdAndDelete(id);
    }
    transformMovie(movie) {
        movie.slug = this.getSlug(movie.title);
        movie.score = this.getScore(movie.reviews);
        return movie;
    }
    getSlug(title) {
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
};
MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(movie_entity_1.Movie.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MoviesService);
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.service.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCasesService = void 0;
const common_1 = require("@nestjs/common");
const movies_service_1 = require("../../domain/movies/services/movies.service");
let UseCasesService = class UseCasesService {
    constructor(moviesService) {
        this.moviesService = moviesService;
    }
    async getReviewsForPlatforms(movie) {
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
        });
        return reviewsForPlatforms;
    }
    async createReview(review) {
        let movie = await this.moviesService.findOne(review.movie);
        movie.reviews.push(review);
        return this.moviesService.create(movie);
    }
    async cloneMovie(id) {
        let movie = await this.moviesService.findOne(id);
        const movieObject = movie.toObject();
        delete movieObject._id;
        return this.moviesService.create(movieObject);
    }
};
UseCasesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [movies_service_1.MoviesService])
], UseCasesService);
exports.UseCasesService = UseCasesService;
//# sourceMappingURL=use-cases.service.js.map
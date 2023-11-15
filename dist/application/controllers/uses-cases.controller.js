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
exports.UsesCasesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const movies_dto_1 = require("../dtos/movies.dto");
const movies_service_1 = require("../../domain/movies/services/movies.service");
const use_cases_service_1 = require("../services/use-cases.service");
const mongo_id_pipe_1 = require("../common/mongo-id.pipe");
const reviews_dto_1 = require("../dtos/reviews.dto");
let UsesCasesController = class UsesCasesController {
    constructor(moviesService, useCasesService) {
        this.moviesService = moviesService;
        this.useCasesService = useCasesService;
    }
    async getAllMovies(paramas) {
        return await this.moviesService.findAll(paramas);
    }
    async getMovieById(id) {
        return await this.moviesService.findOne(id);
    }
    async getReviewMovieById(id) {
        const movie = await this.moviesService.findOne(id);
        return this.useCasesService.getReviewsForPlatforms(movie);
    }
    createMovie(createMovieDto) {
        return this.moviesService.create(createMovieDto);
    }
    async cloneMovie(id) {
        return await this.useCasesService.cloneMovie(id);
    }
    addReview(createReviewDto) {
        return this.useCasesService.createReview(createReviewDto);
    }
    updateMovie(id, updateMovieDto) {
        return this.moviesService.update(id, updateMovieDto);
    }
    deleteMovie(id) {
        return this.moviesService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movies_dto_1.FilterMoviesDto]),
    __metadata("design:returntype", Promise)
], UsesCasesController.prototype, "getAllMovies", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', mongo_id_pipe_1.MongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsesCasesController.prototype, "getMovieById", null);
__decorate([
    (0, common_1.Get)(':id/reviews'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', mongo_id_pipe_1.MongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsesCasesController.prototype, "getReviewMovieById", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movies_dto_1.CreateMovieDto]),
    __metadata("design:returntype", void 0)
], UsesCasesController.prototype, "createMovie", null);
__decorate([
    (0, common_1.Post)(':id/clone'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Param)('id', mongo_id_pipe_1.MongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsesCasesController.prototype, "cloneMovie", null);
__decorate([
    (0, common_1.Post)('/review'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reviews_dto_1.CreateReviewDto]),
    __metadata("design:returntype", void 0)
], UsesCasesController.prototype, "addReview", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', mongo_id_pipe_1.MongoIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, movies_dto_1.UpdateMovieDto]),
    __metadata("design:returntype", void 0)
], UsesCasesController.prototype, "updateMovie", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', mongo_id_pipe_1.MongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsesCasesController.prototype, "deleteMovie", null);
UsesCasesController = __decorate([
    (0, common_1.Controller)('movies'),
    __metadata("design:paramtypes", [movies_service_1.MoviesService,
        use_cases_service_1.UseCasesService])
], UsesCasesController);
exports.UsesCasesController = UsesCasesController;
//# sourceMappingURL=uses-cases.controller.js.map
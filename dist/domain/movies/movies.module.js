"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const movies_service_1 = require("./services/movies.service");
const movie_entity_1 = require("./entities/movie.entity");
const platform_entity_1 = require("./entities/platform.entity");
const review_entity_1 = require("./entities/review.entity");
let MoviesModule = class MoviesModule {
};
MoviesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                {
                    name: movie_entity_1.Movie.name,
                    schema: movie_entity_1.MovieSchema
                },
                {
                    name: platform_entity_1.Platform.name,
                    schema: platform_entity_1.PlatformSchema
                },
                {
                    name: review_entity_1.Review.name,
                    schema: review_entity_1.ReviewSchema
                }
            ])],
        providers: [movies_service_1.MoviesService],
        exports: [movies_service_1.MoviesService]
    })
], MoviesModule);
exports.MoviesModule = MoviesModule;
//# sourceMappingURL=movies.module.js.map
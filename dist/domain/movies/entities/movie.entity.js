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
exports.MovieSchema = exports.Movie = void 0;
const openapi = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const platform_entity_1 = require("./platform.entity");
const review_entity_1 = require("./review.entity");
let Movie = class Movie extends mongoose_2.Document {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, slug: { required: true, type: () => String }, image: { required: true, type: () => String }, director: { required: true, type: () => String }, platforms: { required: true, type: () => [require("./platform.entity").Platform] }, score: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, reviews: { required: true, type: () => [require("./review.entity").Review] } };
    }
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Movie.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Movie.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Movie.prototype, "director", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [platform_entity_1.Platform] }),
    __metadata("design:type", mongoose_2.Types.Array)
], Movie.prototype, "platforms", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Movie.prototype, "score", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Movie.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Movie.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [review_entity_1.Review] }),
    __metadata("design:type", mongoose_2.Types.Array)
], Movie.prototype, "reviews", void 0);
Movie = __decorate([
    (0, mongoose_1.Schema)()
], Movie);
exports.Movie = Movie;
exports.MovieSchema = mongoose_1.SchemaFactory.createForClass(Movie);
//# sourceMappingURL=movie.entity.js.map
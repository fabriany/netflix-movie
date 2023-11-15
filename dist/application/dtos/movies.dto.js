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
exports.FilterMoviesDto = exports.UpdateMovieDto = exports.CreateMovieDto = void 0;
const openapi = require("@nestjs/swagger");
const platforms_dto_1 = require("./platforms.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CreateMovieDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, slug: { required: true, type: () => String }, image: { required: true, type: () => String }, director: { required: true, type: () => String }, platforms: { required: true, type: () => [require("./platforms.dto").CreatePlatformDto] }, score: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "director", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => platforms_dto_1.CreatePlatformDto),
    __metadata("design:type", Array)
], CreateMovieDto.prototype, "platforms", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateMovieDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateMovieDto.prototype, "updatedAt", void 0);
exports.CreateMovieDto = CreateMovieDto;
class UpdateMovieDto extends (0, swagger_1.PartialType)(CreateMovieDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateMovieDto = UpdateMovieDto;
class FilterMoviesDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { limit: { required: true, type: () => Number, minimum: 1 }, offset: { required: true, type: () => Number, minimum: 0 } };
    }
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], FilterMoviesDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], FilterMoviesDto.prototype, "offset", void 0);
exports.FilterMoviesDto = FilterMoviesDto;
//# sourceMappingURL=movies.dto.js.map
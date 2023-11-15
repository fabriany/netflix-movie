import { CreatePlatformDto } from './platforms.dto';
export declare class CreateMovieDto {
    readonly title: string;
    readonly slug: string;
    readonly image: string;
    readonly director: string;
    readonly platforms: CreatePlatformDto[];
    readonly score: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
declare const UpdateMovieDto_base: import("@nestjs/common").Type<Partial<CreateMovieDto>>;
export declare class UpdateMovieDto extends UpdateMovieDto_base {
}
export declare class FilterMoviesDto {
    limit: number;
    offset: number;
}
export {};

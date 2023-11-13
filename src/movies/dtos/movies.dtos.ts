import { CreatePlatformDto } from './platforms.dtos'
import { CreateReviewDto } from './reviews.dtos'

import { IsString, 
		 IsNumber, 
		 IsOptional,
		 IsNotEmpty, 
		 IsDate,
		 IsPositive,
		 Min,
		 ValidateNested } from 'class-validator'
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types'

export class CreateMovieDto {
	@IsString()
	@IsNotEmpty()
	readonly title: string;

	@IsString()
	readonly slug: string;

	@IsString()
	@IsNotEmpty()
	readonly image: string;

	@IsString()
	@IsNotEmpty()
    readonly director: string;

	@IsNotEmpty()
	@ValidateNested({ each: true })
	@Type(() => CreatePlatformDto)
	readonly platforms: CreatePlatformDto[];
	
	@IsNumber()
	readonly score: number;

	@IsDate()
	@Type(() => Date)
    readonly createdAt: Date;

	@IsDate()
	@Type(() => Date)
    readonly updatedAt: Date;

	@IsNotEmpty()
	@ValidateNested({ each: true })
	@Type(() => CreateReviewDto)
	readonly reviews: CreateReviewDto[];
}

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

export class FilterMoviesDto {
	@IsOptional()
	@IsPositive()
	limit: number;

	@IsOptional()
	@Min(0)
	offset: number;
}
import { Platform } from '../../platforms/entities/platform.entity'
import { Review } from '../../reviews/entities/review.entity'
import { IsString, IsNumber, IsUrl, IsNotEmpty, IsDate } from 'class-validator'
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types'

export class CreateMovieDto {
	@IsString()
	@IsNotEmpty()
	readonly title: string;

	@IsUrl()
	readonly slug: string;

	@IsUrl()
	@IsNotEmpty()
	readonly image: string;

	@IsString()
	@IsNotEmpty()
    readonly director: string;

	@IsNotEmpty()
	readonly platforms: Platform[];
	
	@IsNumber()
	readonly score: number;

	@IsDate()
	@Type(() => Date)
    readonly createdAt: Date;

	@IsDate()
	@Type(() => Date)
    readonly updatedAt: Date;

	@IsNotEmpty()
	readonly reviews: Review[];
}

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
import { IsString, IsNumber, IsUrl, IsNotEmpty, IsDate } from 'class-validator'
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types'

export class CreateReviewDto {
    @IsNotEmpty()
	readonly movie: number;

    @IsNotEmpty()
    readonly platform: number;

    @IsNotEmpty()
    @IsString()
    readonly author: string

    @IsNotEmpty()
    @IsString()
	readonly body: string

    @IsNotEmpty()
    @IsNumber()
	readonly score: number

    @IsDate()
	@Type(() => Date)
	readonly createdAt: Date;

    @IsDate()
	@Type(() => Date)
    readonly updatedAt: Date;
}

export class UpdateReviewDto extends PartialType(CreateReviewDto) {}
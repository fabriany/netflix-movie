import { CreatePlatformDto } from './platforms.dto';

import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsDate,
  IsPositive,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

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

  readonly score: number;

  @IsDate()
  @Type(() => Date)
  readonly createdAt: Date;

  @IsDate()
  @Type(() => Date)
  readonly updatedAt: Date;
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

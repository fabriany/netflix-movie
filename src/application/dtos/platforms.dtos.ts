import { IsString, IsNotEmpty, IsDate } from 'class-validator'
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types'


export class CreatePlatformDto {

    @IsString()
	@IsNotEmpty()
    readonly icon: string;

    @IsString()
	@IsNotEmpty()
    readonly title: string;

    @IsDate()
	@Type(() => Date)
	readonly createdAt: Date;

    @IsDate()
	@Type(() => Date)
    readonly updatedAt: Date;
}

export class UpdatePlatformDto extends PartialType(CreatePlatformDto) {}
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

import { Platform } from '../../platforms/entities/platform.entity'
import { Review } from '../../reviews/entities/review.entity'


@Schema()
export class Movie extends Document{
	@Prop()
	title: string;

	@Prop()
	slug: string;

	@Prop()
	image: string;

	@Prop()
    director: string;

	@Prop({type: Array})
	platforms: Platform[];

	@Prop({type: Number})
	score: number;

	@Prop({type: Date})
    createdAt: Date;

	@Prop({type: Date})
    updatedAt: Date;

	@Prop({type: Array})
	reviews: Review[];
}

export const MovieSchema =  SchemaFactory.createForClass(Movie);
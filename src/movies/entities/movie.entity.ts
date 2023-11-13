import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

import { Platform } from './platform.entity'
import { Review } from './review.entity'


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

	@Prop({type: [Platform]})
	platforms: Types.Array<Platform>;

	@Prop({type: Number})
	score: number;

	@Prop({type: Date})
    createdAt: Date;

	@Prop({type: Date})
    updatedAt: Date;

	@Prop({type: [Review]})
	reviews: Types.Array<Review>;
}

export const MovieSchema =  SchemaFactory.createForClass(Movie);
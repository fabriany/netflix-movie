import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Review extends Document {
    @Prop({type: Number})
	movie: number;

    @Prop({type: Number})
    platform: number;

    @Prop()
    author: string

    @Prop()
	body: string

    @Prop({type: Number})
	score: number

    @Prop({type: Date})
	createdAt: Date;

    @Prop({type: Date})
    updatedAt: Date;
}

export const ReviewSchema =  SchemaFactory.createForClass(Review);
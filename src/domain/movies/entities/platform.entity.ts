import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Platform extends Document {
  @Prop()
  icon: string;

  @Prop()
  title: string;

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;
}

export const PlatformSchema = SchemaFactory.createForClass(Platform);

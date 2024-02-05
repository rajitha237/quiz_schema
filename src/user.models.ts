import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document


@Schema()
export class User extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  courseId: string; // Assuming Course ID is a string

  @Prop({ type: Number, required: true })
  timeLimit: number;

  @Prop({ type: Number, required: true })
  numberOfQuestions: number;
  
  @Prop({ default: Date.now })
  date_added: Date;
}

export const UserSchema = SchemaFactory.createForClass(User)
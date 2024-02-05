import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.models';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dissanayakarajitha27:Ncc2263930@cluster0.dzqb7ts.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'user',schema:UserSchema}]),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

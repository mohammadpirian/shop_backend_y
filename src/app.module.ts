import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BlogModule } from './blog/blog.module.js';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BlogModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-app'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

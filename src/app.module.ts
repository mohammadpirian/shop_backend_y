import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BlogController } from './blog/blog.controller.js';
import { BlogService } from './blog/blog.service.js';

@Module({
  imports: [],
  controllers: [AppController, BlogController],
  providers: [AppService, BlogService],
})
export class AppModule {}

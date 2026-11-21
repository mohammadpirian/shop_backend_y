import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BlogController } from './blog/blog.controller.js';

@Module({
  imports: [],
  controllers: [AppController, BlogController],
  providers: [AppService],
})
export class AppModule {}

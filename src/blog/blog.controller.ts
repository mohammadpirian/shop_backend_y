import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BlogDto } from './dtos/blog.dto.js';

@ApiTags('Blog')
@Controller('blog')
export class BlogController {
  @Get()
  findAll(@Query() queryParams: any) {
    return 'find all';
  }

  @Post()
  create(@Body() body: BlogDto) {
    console.log(body);
    return 'create';
  }

  @Get('categories')
  findAllCategories() {
    return 'find all categories';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `find one: ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: BlogDto) {
    console.log(body);
    return `update: ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `delete: ${id}`;
  }
}

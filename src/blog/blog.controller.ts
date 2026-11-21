import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('blog')
export class BlogController {
  @Get()
  findAll() {
    return 'find all';
  }

  @Post()
  create(@Body() body: any) {
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
  update(@Param('id') id: string, @Body() body: any) {
    console.log(body);
    return `update: ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `delete: ${id}`;
  }
}

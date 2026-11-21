import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogDto } from './dtos/blog.dto.js';
import { InjectModel } from '@nestjs/mongoose';
import { Blog } from './schemas/blog.schema.js';
import { Model } from 'mongoose';
import { BlogQueryDto } from './dtos/blog-query.dto.js';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name) private readonly blogModel: Model<Blog>,
  ) {}

  async findAll(queryParams: BlogQueryDto) {
    const { limit = 5, page = 1, title } = queryParams;

    const query: any = {};

    if (title) {
      query.title = { $regex: title, $option: 'i' };
    }
    const blogs = await this.blogModel
      .find(query)
      .skip(page - 1)
      .limit(limit)
      .exec();

    const count = await this.blogModel.countDocuments();

    return { count, blogs };
  }

  async findOne(id: string) {
    const blog = await this.blogModel.findOne({ _id: id }).exec();

    if (blog) {
      return blog;
    } else {
      throw new NotFoundException();
    }
  }

  async create(body: BlogDto) {
    const newBlog = new this.blogModel(body);

    await newBlog.save();

    return newBlog;
  }

  async update(id: string, body: BlogDto) {
    const blog = await this.findOne(id);

    blog.title = body.title;
    blog.content = body.content;

    await blog.save();
    return blog;
  }

  async delete(id: string) {
    const blog = await this.findOne(id);
    await blog.deleteOne();
  }
}

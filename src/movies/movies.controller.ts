import { Controller, Delete, Get, Param, Post } from '@nestjs/common'

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'Movie controller all movies'
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie ${movieId}`
  }

  @Post()
  create() {
    return 'Create'
  }
  @Delete()
  remove() {
    return 'Delete'
  }
}

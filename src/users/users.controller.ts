import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUser(@Body() userEmail) {
    console.log('userEmail', userEmail);
  }

  @Post()
  create(@Body() userData: User) {
    console.log('dfdf', userData);
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUser() {
    console.log('ㅇㅕ기까지는?', process.env.MY_NAME);
    return 'hi';
  }

  @Post()
  create(@Body() userData: User) {
    return this.userService.createUser(userData);
  }
}

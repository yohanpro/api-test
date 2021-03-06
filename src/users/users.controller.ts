import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUser(@Body() userEmail) {
    const { email } = userEmail;
    return this.userService.findUser(email);
  }

  @Post()
  create(@Body() userData: User) {
    return this.userService.createUser(userData);
  }
}

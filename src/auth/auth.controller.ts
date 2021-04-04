import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('/token')
  postUserTest(@Query('vendor') query: string): string {
    return `you are success to get Param ${query}`;
  }
}

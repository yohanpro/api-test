import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/token')
  postUserToken(
    @Body() payload: { token: string },
    @Query('vendor') vendor: string
  ) {
    return this.authService.postUserToken(payload, vendor);
  }

  @Post('/refresh_token')
  postUserRefreshToekn(@Body() payload: { token: string }) {
    return this.authService.postUserRefreshToekn(payload);
  }
}

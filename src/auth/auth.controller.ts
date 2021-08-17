import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}

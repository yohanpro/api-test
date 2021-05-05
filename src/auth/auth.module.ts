import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'abcd',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}

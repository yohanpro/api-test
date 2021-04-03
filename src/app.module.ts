import { Module } from '@nestjs/common';

import { UsersController } from './users/users.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [AuthModule, UsersModule, MoviesModule],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}

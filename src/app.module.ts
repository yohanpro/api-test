import { Module } from '@nestjs/common';

import { MoviesController } from './movies/movies.controller';
import { UsersController } from './users/users.controller';
import { MoviesService } from './movies/movies.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [MoviesController, UsersController],
  providers: [MoviesService],
})
export class AppModule {}

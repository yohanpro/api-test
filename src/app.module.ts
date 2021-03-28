import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MoviesController } from './movies/movies.controller'
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [MoviesController, UsersController],
  providers: [],
})
export class AppModule {}

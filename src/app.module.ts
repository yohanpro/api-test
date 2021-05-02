import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MoviesModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'development' ? '.env.dev' : '.env.prod',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_SECRET}/${process.env.DB_NAME}?retryWrites=true&w=majority`
    ),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

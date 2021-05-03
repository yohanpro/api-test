import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User | any>
  ) {}

  private users: User[] = [
    {
      id: '1',
      name: 'john',
      nickname: 'john_1',
      email: 'john@example.com',
      account_status: 0,
    },
    {
      id: '2323',
      name: 'Smith',
      nickname: 'Smith_1',
      email: 'smith@example.com',
      account_status: 1,
    },
  ];

  async findUser(email: string): Promise<User | undefined> {
    return this.userModel
      .findOne({ email })
      .then((result) => result.toObject());
  }

  async createUser(userData) {
    const { name, password, email, nickname } = userData;

    const newUser = new this.userModel({
      name,
      password,
      email,
      nickname,
    });
    const result = await newUser.save();
    return result;
  }
  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find((user) => user.username === username);
  // }
}

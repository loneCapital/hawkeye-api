import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async fetch(): Promise<String> {
    const users = await this.usersService.findAll();
    console.log('users', users);
    return 'fetch all users';
  }
}

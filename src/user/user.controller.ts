import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
UserService;

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async store() {
    return await this.userService.store();
  }
}

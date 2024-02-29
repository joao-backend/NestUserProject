import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaClient) {}

  async store() {
    const user = await this.prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@prisma.io',
      },
    });

    return user;
  }
}

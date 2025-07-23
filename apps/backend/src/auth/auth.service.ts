import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signIn(username: string, password: string) {
    const user = await this.userService.findOneWithUsername(username);
    if (user?.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { password: _, ...result } = user;

    // TODO : generate JWT

    return result;
  }
}

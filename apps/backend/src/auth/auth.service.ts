import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from '@repo/dto/auth';
import { hash } from 'bcrypt';
import { User } from 'src/entity/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ accessToken: string }> {
    const user = await this.userService.findOneWithUsername(username);
    if (user?.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, username: user.username };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async hashPassword(password: string): Promise<string> {
    return await hash(password, 10);
  }

  async signUp(dto: SignUpDto): Promise<User> {
    const { password } = dto;
    const hashed = await this.hashPassword(password);

    return await this.userService.saveUser({
      ...dto,
      password: hashed,
    });
  }
}

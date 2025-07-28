import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from '@repo/dto/auth';
import {
  EmailError,
  IdentifierError,
  UsernameError,
} from '@repo/dto/validator';
import { HttpResponse } from '@repo/dto/http';
import { User } from 'src/entity/user.entity';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signinDto: Record<string, any>) {
    return this.authService.signIn(signinDto.username, signinDto.password);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    const { email, username, identifier } = signUpDto;

    if (await this.userService.findOneWithEmail(email)) {
      throw new BadRequestException({
        message: 'already exists' as EmailError,
      } as HttpResponse<User>);
    } else if (await this.userService.findOneWithUsername(username)) {
      throw new BadRequestException({
        message: 'already exists' as UsernameError,
      } as HttpResponse<User>);
    } else if (await this.userService.findOneWithIdentifier(identifier)) {
      throw new BadRequestException({
        message: 'already exists' as IdentifierError,
      } as HttpResponse<User>);
    }

    const user = await this.authService.signUp(signUpDto);

    return {
      status: HttpStatus.CREATED,
      message: 'Ok',
      data: user,
    } as HttpResponse<User>;
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

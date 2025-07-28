import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from '@repo/dto/auth';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOneWithUsername(username: string): Promise<User | null> {
    return this.userRepository.findOneBy({ username });
  }

  async findOneWithId(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async findOneWithEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email });
  }

  async findOneWithIdentifier(identifier: string): Promise<User | null> {
    return this.userRepository.findOneBy({ identifier });
  }

  async saveUser(dto: SignUpDto): Promise<User> {
    const user = this.userRepository.create(dto);
    return this.userRepository.save(user);
  }
}

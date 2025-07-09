import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import appConfig from './config/app.config';

@Injectable()
export class AppService {
  constructor(
    @Inject(appConfig.KEY)
    private readonly config: ConfigType<typeof appConfig>,
  ) {}

  getHello(): string {
    const port = this.config.port;
    return `Running on port ${port}`;
  }
}

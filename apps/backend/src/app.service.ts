import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import appConfig from './config/app.config';
import { DbService } from './db/db.service';

@Injectable()
export class AppService {
  constructor(
    @Inject(appConfig.KEY)
    private readonly config: ConfigType<typeof appConfig>,
    private readonly dbService: DbService,
  ) {}

  getHello(): string {
    const port = this.config.port;
    const dbUrl = this.dbService.getUrl();
    return `Running on port ${port}\nDatabase URL: ${dbUrl}`;
  }
}

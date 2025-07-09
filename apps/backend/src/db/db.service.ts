import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import dbConfig from 'src/config/db.config';

@Injectable()
export class DbService {
  constructor(
    @Inject(dbConfig.KEY)
    private config: ConfigType<typeof dbConfig>,
  ) {}

  getUrl(): string {
    const { host, port, username, password, database } = this.config;
    return `${username}:${password}@${host}:${port}/${database}`;
  }
}

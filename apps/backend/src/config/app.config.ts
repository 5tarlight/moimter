import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
}));

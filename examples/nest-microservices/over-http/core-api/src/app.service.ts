import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private httpClient: HttpService) {}

  getHello(): string {
    return 'Hello World from CORE API!';
  }

  async displaySecretFromMs1(): Promise<string> {
    try {
      const startTime = Date.now();
      const response = await this.httpClient.get<{ secret: string }>(
      'http://localhost:3001/secret'
      ).toPromise();
      const timeout = Date.now() - startTime;
      return `Secret: ${response?.data?.secret || 'DEFAULT_SECRET'}, Timeout: ${timeout}ms`;
    } catch (error) {
      return 'Failed to retrieve secret from MS1';
    }
  }
}

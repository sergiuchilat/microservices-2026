import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from MS1!';
  }

  getSeccretValue(): string {
    return 'This is a secret value from MS1(update 1)!';
  }
}

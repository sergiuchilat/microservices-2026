import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('secret')
  async getSecretValue(): Promise<{ secret: string }> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { secret: this.appService.getSeccretValue() };
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('secret-from-ms1')
  async displaySecretFromMs1(): Promise<{ secret: string }> {
    const secret = await this.appService.displaySecretFromMs1();
    return { secret };
  }
}

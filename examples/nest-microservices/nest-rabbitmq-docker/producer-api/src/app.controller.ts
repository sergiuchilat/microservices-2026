import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}

  @Get('send-msg')
  async sendMessage() {
    // Trimitem un mesaj pe pattern-ul 'notifications'
    this.client.emit('notifications', {
      text: 'Salut din Docker!',
      date: new Date(),
    });
    return { message: 'Mesaj trimis catre coada RabbitMQ!' };
  }
}

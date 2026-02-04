import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'], // Același URL ca la producer
        queue: 'math_queue', // Aceeași coadă
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen();
  console.log('Consumer Worker is listening...');
}
bootstrap();

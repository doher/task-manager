import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../application/services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // todo: healthcheck instead of it
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

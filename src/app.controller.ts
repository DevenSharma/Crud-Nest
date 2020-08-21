
import { Controller, Get, Res, Next, Req } from '@nestjs/common';
import { join } from 'path';
import { Response, NextFunction, Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  get(
    @Res() res: Response,
    @Next() next: NextFunction,
    @Req() req: Request,
  ) {
    res.sendFile(join(process.cwd(), './client/index.html'));
  }

  root() {
    return this.appService.root();
  }
}

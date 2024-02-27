import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    onModuleInit() {
        try {
            this.method()
        } catch (error) {
            throw new Error('test 123', { cause: error })
        }
    }

    method() {
        throw new Error('cause 456')
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}

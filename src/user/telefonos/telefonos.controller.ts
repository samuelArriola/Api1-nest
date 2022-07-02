import { Body, Controller, Post } from '@nestjs/common';
import { TelefonosService } from './telefonos.service';

@Controller('telefonos')
export class TelefonosController {
    constructor(private telService: TelefonosService){}

    @Post()
    postTel(@Body() Body: any){

    }
}

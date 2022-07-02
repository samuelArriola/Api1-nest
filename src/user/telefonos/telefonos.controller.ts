import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { TelefonoDto } from '../dto/telefono.dto';
import { TelefonosService } from './telefonos.service';

@Controller('telefonos')
export class TelefonosController {
    constructor(private telService: TelefonosService){}

    @Post()
    postTel(@Body() Body: TelefonoDto, @Res() res){
        this.telService.create(Body)
        .then( dat => {
            res.status(HttpStatus.CREATED).json({
                "status": true,
                "data": dat
            });
        }).catch( err => {
            res.status(HttpStatus.FORBIDDEN).json({
                "status": false,
                  err
              });
        });
    }
}

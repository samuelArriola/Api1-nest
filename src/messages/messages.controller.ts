import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';
import { identity } from 'rxjs';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor( private messagesService: MessagesService){}
    @Get()
    getData(@Res() response): any {
        this.messagesService.findAll().then( res => {
            response.status(HttpStatus.OK).json({
                "status": true,
                "data": res
            });
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({
                "status": false,
                "data": 'Error en el servicio'
            });
        });
    }

    @Get(':id')
    getOne(@Param('id') id, @Res() response){
        this.messagesService.findOne(id).then( data => {

           if(data == null){
             return response.status(HttpStatus.BAD_REQUEST).json({
                "status": true,
                "Message": `Usuario ${id} no encontrado. verifique el ID y vuelva a intentar`
             }) 
           }

            response.status(HttpStatus.OK).json({
                "status": true,
                "data": data
            });
        }).catch( ()=>{
            response.status(HttpStatus.FORBIDDEN).json({
                "status": false,
                "data": 'Error en el servicio'
            });
        });
    }

    @Post()
    postData(@Body() createMensaje : CreateMensajeDto, @Res() response) {
        this.messagesService.createMsg(createMensaje).then( msg => {
            response.status(HttpStatus.CREATED).json({
                "status": true,
                "data": msg
            });
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({
                "status": false,
                "data": 'Error en el servicio'
            });
        });
    }

    @Put(':id')
    putData(@Body() createMensajeDto : CreateMensajeDto, @Res() response, @Param('id') id){
        this.messagesService.updateMsg(id, createMensajeDto).then( res => {
            response.status(HttpStatus.OK).json({
                "status": true,
                "res": res
            });
        }).catch( ()=>{
            response.status(HttpStatus.FORBIDDEN).json({
                "status": false,
                "data": 'Error en el servicio'
            });
        });
    }

    @Delete(':id')
    deleteData(@Param('id') id, @Res() response ){
        this.messagesService.deleteMsg(id).then( res => {
            response.status(HttpStatus.OK).json({
                "status": true,
                "res": res
            });
        }).catch( ()=>{
            response.status(HttpStatus.FORBIDDEN).json({
                "status": false,
                "data": 'Error en el servicio'
            });
        });
    }

}

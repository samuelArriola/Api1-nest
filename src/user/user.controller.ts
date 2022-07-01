import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto, @Res() res) {
     this.userService.create(createUserDto)
     .then( dat => {
        res.status(HttpStatus.OK).json({
          "status": true,
          dat
        });
     }).catch( ()=>{
        res.status(HttpStatus.FORBIDDEN).json({
          "status": false,
          "data": 'Error en el servicio'
        });
     });
  }

  @Get()
  findAll(@Res() res) {
     this.userService.findAll()
     .then( dat => {
        res.status(HttpStatus.OK).json({
          "status": true,
          dat
        });
     }).catch( ()=>{
       res.status(HttpStatus.FORBIDDEN).json({
         "status": false,
         "data": 'Error en el servicio'
       });
     });
  }

  @Get(':id')
  findOne(@Param('id') id, @Res() res) {
    this.userService.findOne(id)
    .then( dat => {
      res.status(HttpStatus.OK).json({
        "status": true,
         dat
      });
    }).catch( err => {
      res.status(HttpStatus.FORBIDDEN).json({
        "status": false,
          err
      });
    });
  }

  @Patch(':id')
  update(@Param('id') id,@Body() createUserDto: CreateUserDto, @Res() res ) {
     this.userService.update(id, createUserDto)
     .then( dat => {
        res.status(HttpStatus.OK).json({
          "status": true,
           dat
        });
     }).catch(err => {
      res.status(HttpStatus.FORBIDDEN).json({
        "status": false,
          err
      });
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

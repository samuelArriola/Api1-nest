import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Message } from './messages/entity/message.entity';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { TelefonoEntity } from './user/entities/telefono.entity';
import { User } from './user/entities/user.entity';
import { UserController } from './user/user.controller';

import { UserService } from './user/user.service';
import { TelefonosService } from './user/telefonos/telefonos.service';
import { TelefonosController } from './user/telefonos/telefonos.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'samuel',
      password: 'mMpvSZEakGZAhjnH',
      database: 'hola',
      entities: [ __dirname + '/**/*.entity{.ts,.js}',],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Message,User, TelefonoEntity]),
    
  ],
  controllers: [AppController, MessagesController, UserController, TelefonosController],
  providers: [AppService, MessagesService, UserService, TelefonosService],
})
export class AppModule {}

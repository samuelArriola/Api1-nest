import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Message } from './messages/entity/message.entity';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { User } from './user/entities/user.entity';
import { UserController } from './user/user.controller';

import { UserService } from './user/user.service';

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
    TypeOrmModule.forFeature([Message,User]),
    
  ],
  controllers: [AppController, MessagesController, UserController],
  providers: [AppService, MessagesService, UserService],
})
export class AppModule {}

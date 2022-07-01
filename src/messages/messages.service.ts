import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { Message } from './entity/message.entity';

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message)
        private messageRepository: Repository<Message>,
    ) {}

    async findAll(): Promise<Message[]>{
        return await this.messageRepository.find();
    }
    
    async findOne(id: number): Promise<Message>{
        return await this.messageRepository.findOne({
            where: {
                id
            }
        });
    }

    async createMsg(mensajeNuevo:CreateMensajeDto): Promise<Message> {
        const nuevo = new Message();
        nuevo.nick = mensajeNuevo.nick;
        nuevo.message = mensajeNuevo.message;
        return this.messageRepository.save(nuevo);
    }

    async updateMsg(id: number, mensajeActu: CreateMensajeDto): Promise<Message>{
        const updateMsg =  await this.messageRepository.findOne({
            where:{
                id
            }
        });
        updateMsg.nick = mensajeActu.nick;
        updateMsg.message = mensajeActu.message;

        return this.messageRepository.save(updateMsg);
    }

    async deleteMsg(id: number): Promise<any>{
       return await this.messageRepository.delete(id);
    }

}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TelefonoEntity } from '../entities/telefono.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class TelefonosService {
    constructor(
        @InjectRepository(TelefonoEntity) private telefonosRepository: Repository<TelefonoEntity>,
        @InjectRepository(User) private UserResosiory: Repository<User>
        ){}

    async create(createTel: any): Promise<TelefonoEntity>{
  
        let dat = await this.UserResosiory.findOne({
            where: {
                idUser: createTel.telefono_id
            }
        })

        if (dat == null) throw new NotFoundException(`Usuario ${ createTel.telefono_id } no encontrado`);
        const telefonoEntity = new TelefonoEntity();
        telefonoEntity.numero = createTel.numero;
        telefonoEntity.user = dat ;
        return this.telefonosRepository.save(telefonoEntity);
    }
}

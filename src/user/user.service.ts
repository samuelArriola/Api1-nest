import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)  
  private userRepository: Repository<User> ){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.nombre = createUserDto.nombre;
    user.apellido = createUserDto.apellido;
    user.apellido = createUserDto.apellido;
    return  this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    //contar resultados
    return await this.userRepository.find({
      where: { activo: true },
      relations: ['telefonos']
    });  
  }

  async findOne(id: number): Promise<User> {
    let user = await this.userRepository.findOne({
      where:{
        idUser: id,
        activo: true
      } 
    });

    if(user == null) throw new NotFoundException(`User ${id} don't found`);
    return user;
  }

  async update(id: number, updateUserDto: CreateUserDto): Promise<User> {
    let user = await this.userRepository.findOne({
      where: {
        idUser: id
      }
    });

    if (user == null) throw new NotFoundException(`Id ${id} no encontrado`);
    user.nombre = updateUserDto.nombre;
    user.apellido = updateUserDto.apellido;
    user.telefono = updateUserDto.telefono;
    return this.userRepository.save(user);
    
  }

  async remove(id: number): Promise<User> {
    let user = await this.userRepository.findOne({
       where: {
         idUser: id
       }
     });

     if( user == null) throw new NotFoundException('Usuario ya eliminado');
     user.activo = false;
     return this.userRepository.save(user);
  }
}

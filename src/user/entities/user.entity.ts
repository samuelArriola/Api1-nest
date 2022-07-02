import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TelefonoEntity } from "./telefono.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    telefono: string;

    @OneToMany( () => TelefonoEntity, (telefonos) => telefonos.user)
    telefonos: TelefonoEntity[];

    @Column({default: true})
    activo: boolean



}

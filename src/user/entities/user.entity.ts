import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    telefono: string

    @Column({default: true})
    activo: boolean

}

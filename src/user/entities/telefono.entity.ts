import { Column, Entity,  JoinColumn,  ManyToOne,  PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class TelefonoEntity {
    @PrimaryGeneratedColumn()
    idTel: number;

    @Column()
    numero: string;

    @ManyToOne( () => User, (user) => user.telefonos )
    @JoinColumn({name: 'telefono_id'})
    user: User;
}

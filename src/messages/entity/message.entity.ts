import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nick: string;

    @Column()
    message: string;

    @Column({default: true})
    active : boolean; 
}

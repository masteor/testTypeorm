import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";

@Entity()
@Unique(["name", "ip"])
@Unique(["name"])
@Unique(["ip"])
export class Computer {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("text")
    name: string;

    @Column("text")
    ip: string;

}

import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";

@Entity()
@Unique(["fio"])
export class Staff {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("text")
    fio: string;

    @Column("integer")
    id_cabinet: number;

    @Column("integer")
    id_computer: number;

}

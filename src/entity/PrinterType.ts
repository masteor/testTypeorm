import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";

@Entity()
@Unique(["name"])
export class PrinterType {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("text")
    name: string;

}

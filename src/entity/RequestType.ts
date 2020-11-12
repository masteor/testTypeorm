import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";

@Entity()
@Unique(["name"])
export class RequestType {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("text")
    name: string;

}

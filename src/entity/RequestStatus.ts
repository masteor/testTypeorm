import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";

@Entity()
@Unique(["name"])
export class RequestStatus {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("text")
    name: string;

}

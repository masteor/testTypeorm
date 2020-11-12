import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";

@Entity()
@Unique(["name"])
export class CartridgeType {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("text")
    name: string;

}

import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";

@Entity()
@Unique(["serialNumber"])
export class Cartridge {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("integer", {})
    id_cartridge_type: number;

    @Column("text", {nullable:true})
    serialNumber: string;

}

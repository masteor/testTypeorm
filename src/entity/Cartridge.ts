import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";

@Entity()
@Unique(["serial_number"])
@Unique(["id_cartridge_type", "serial_number"])
export class Cartridge {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("integer")
    id_cartridge_type: number;

    @Column({ nullable: true })
    serial_number: string;

}

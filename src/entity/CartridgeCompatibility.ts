import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm";

@Entity()
export class CartridgeCompatibility {

    /*@PrimaryGeneratedColumn()
    id: number;*/

    @PrimaryColumn("integer")
    id_cartridge_type: number;

    @PrimaryColumn("integer")
    id_printer_type: number;

}

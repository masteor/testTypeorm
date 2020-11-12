import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Printer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("integer")
    id_printer_type: number;

    @Column({nullable:true})
    serial_number: string;

    @Column("integer")
    id_cabinet: number;

}

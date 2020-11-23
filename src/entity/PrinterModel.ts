import {Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany} from "typeorm";
import {Printer} from "./Printer";

@Entity()
@Unique(["name"])
export class PrinterModel {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("text", {})
    name: string;

    @OneToMany(() => Printer, printer => printer.printerModel)
    printers: Printer[];

}

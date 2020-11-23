import {Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, OneToMany} from "typeorm";
import {Staff} from "./Staff";
import {Printer} from "./Printer";
import {Request} from "./Request";
import {Computer} from "./Computer";

@Entity()
@Unique(["number"])
export class Cabinet {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("integer", { nullable: false })
    number: number;

    @Column("text", { nullable: true })
    description: string;

    @OneToMany(() => Staff, staff => staff.cabinet)
    staffs: Staff[];

    @OneToMany(() => Printer, printer => printer.cabinet)
    printers: Printer[];

    @OneToMany(() => Computer, computer => computer.cabinet)
    computers: Computer[];
}

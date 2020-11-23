import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Unique, ManyToOne, OneToMany} from "typeorm";
import {PrinterType} from "./PrinterType";
import {PrinterModel} from "./PrinterModel";
import {Cabinet} from "./Cabinet";
import {Request} from "./Request";

@Entity()
@Unique(["serialNumber"])
export class Printer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text", {nullable:true})
    serialNumber: string;

    @Column("integer", {})
    printerTypeId: number;

    @Column("integer", {})
    printerModelId: number;

    @Column("integer", {})
    cabinetId: number;

    @OneToMany(() => Request, request => request.printer)
    requests: Request[];

    @ManyToOne(() => PrinterType, printerType => printerType.printers, {
        eager: true
    })
    printerType: PrinterType;

    @ManyToOne(() => PrinterModel, printerModel => printerModel.printers, {
        eager: true
    })
    printerModel: PrinterModel;

    @ManyToOne(() => Cabinet, cabinet => cabinet.printers, {
        eager: true
    })
    cabinet: Cabinet;
}

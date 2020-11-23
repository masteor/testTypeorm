import {Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, PrimaryColumn} from "typeorm";
import {Computer} from "./Computer";
import { RequestType } from "./RequestType";
import {Staff} from "./Staff";
import {Printer} from "./Printer";

@Entity()
@Unique([
    "requestTypeId",
    "staffCreatorId",
    "staffRecipientId",
    "createDate",
    "description"
])
export class Request {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("integer", {})
    requestTypeId: number;

    @Column("integer", { nullable: false })
    printerId: number;

    @Column("integer", { nullable: false })
    computerId: number;

    @Column("integer", {})
    staffCreatorId: number;

    @Column("integer", {})
    staffRecipientId: number;

    @Column("text", { nullable: false })
    description: string;

    @Column("text", {})
    createDate: string;

    @Column("text", {})
    createDateTime: string;

    @Column("text", { nullable: true })
    closeDateTime: string;

    @ManyToOne(() => Computer, computer => computer.requests, {
        eager: true
    })
    computer: Computer;

    @ManyToOne(() => Printer, printer => printer.requests, {
        eager: true
    })
    printer: Printer;

    @ManyToOne(() => RequestType, requestType => requestType.requests, {
        eager: true
    })
    requestType: RequestType;

    @ManyToOne(() => Staff, staff => staff.creatorRequests, {
        eager: true
    })
    staffCreator: Staff;

    @ManyToOne(() => Staff, staff => staff.recipientRequests, {
        eager: true
    })
    staffRecipient: Staff;
}

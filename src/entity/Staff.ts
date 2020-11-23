import {Entity, PrimaryGeneratedColumn, Column, Unique, OneToOne, JoinColumn, OneToMany, ManyToOne} from "typeorm";
import {Cabinet} from "./Cabinet";
import {Computer} from "./Computer";
import {Request} from "./Request";

@Entity()
@Unique(["fio"])
export class Staff {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("text", {})
    fio: string;

    @Column("integer", {})
    cabinetId: number;

    @Column("integer", {})
    computerId: number;

    @ManyToOne(() => Cabinet, cabinet => cabinet.staffs, {
        eager: true
    })
    cabinet: Cabinet;

    @ManyToOne(() => Computer, computer => computer.staffs, {
        eager: true
    })
    computer: Computer;

    @OneToMany(() => Request, request => request.staffCreator)
    creatorRequests: Request[];

    @OneToMany(() => Request, request => request.staffRecipient)
    recipientRequests: Request[];
}

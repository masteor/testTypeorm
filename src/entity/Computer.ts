import {Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany, ManyToOne} from "typeorm";
import {Staff} from "./Staff";
import {Request} from "./Request";
import {Cabinet} from "./Cabinet";

@Entity()
@Unique(["name", "ip"])
@Unique(["name"])
@Unique(["ip"])
export class Computer {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("text", {})
    name: string;

    @Column("text", {})
    ip: string;

    @OneToMany(() => Staff, staff => staff.computer)
    staffs: Staff[];

    @OneToMany(() => Request, request => request.computer)
    requests: Request[];

    @ManyToOne(() => Cabinet, cabinet => cabinet.computers, {
        eager: true
    })
    cabinet: Cabinet;

    /*@OneToMany(() => Request, request => request.computer)
    requests: Request[];*/
}

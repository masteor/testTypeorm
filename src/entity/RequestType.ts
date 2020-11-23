import {Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany} from "typeorm";
import {Request} from "./Request";

@Entity()
@Unique(["name"])
export class RequestType {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("text", {})
    name: string;

    @OneToMany(() => Request, request => request.requestType)
    requests: Request[];

}

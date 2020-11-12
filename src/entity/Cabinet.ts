import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";

@Entity()
@Unique(["number"])
export class Cabinet {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ nullable: false })
    number: number;

    @Column({ nullable: true })
    description: string;

}

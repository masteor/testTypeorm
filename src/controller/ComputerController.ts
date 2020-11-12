import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Computer} from "../entity/Computer";
import {ICommonController} from "./CommonController";

export class ComputerController implements ICommonController {

    private computerRepository = getRepository(Computer);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.computerRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.computerRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.computerRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let toRemove = await this.computerRepository.findOne(request.params.id);
        await this.computerRepository.remove(toRemove);
    }
}

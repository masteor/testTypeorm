import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Cabinet} from "../entity/Cabinet";
import {ICommonController} from "./CommonController";

export class CabinetController implements ICommonController {

    private cabinetRepository = getRepository(Cabinet);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.cabinetRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.cabinetRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.cabinetRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.cabinetRepository.findOne(request.params.id);
        await this.cabinetRepository.remove(userToRemove);
    }

}

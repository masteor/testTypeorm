import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Cabinet} from "../entity/Cabinet";
import {ICommonController} from "./CommonController";

export class CabinetController implements ICommonController {

    private repo = getRepository(Cabinet);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.repo.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.repo.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.repo.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        await this.repo.remove (
            await this.repo.findOne(request.params.id));
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let entity = await this.repo.findOne(request.params.id);
        this.repo.merge(entity, request.body);
        return this.repo.save(entity);
    }
}

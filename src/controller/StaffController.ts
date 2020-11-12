import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Staff} from "../entity/Staff";
import {ICommonController} from "./CommonController";

export class StaffController implements ICommonController {

    private repo = getRepository(Staff);

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
        await
            this.repo.remove
            (await
                this.repo.findOne(request.params.id));
    }
}

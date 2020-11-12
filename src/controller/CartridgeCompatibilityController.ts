import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {CartridgeCompatibility} from "../entity/CartridgeCompatibility";
import {ICommonController} from "./CommonController";

export class CartridgeCompatibilityController implements ICommonController {

    private repo = getRepository(CartridgeCompatibility);

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
        let toRemove = await this.repo.findOne(request.params.id);
        await this.repo.remove(toRemove);
    }
}

import {ICommonController} from "./CommonController";
import {getRepository} from "typeorm";
import {Cartridge} from "../entity/Cartridge";
import {NextFunction, Request, Response} from "express";

export class CartridgeController implements ICommonController {

    private cartridgeRepo = getRepository(Cartridge)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.cartridgeRepo.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.cartridgeRepo.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.cartridgeRepo.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let cartridgeToRemove = await this.cartridgeRepo.findOne(request.params.id);
        await this.cartridgeRepo.remove(cartridgeToRemove);
    }
}

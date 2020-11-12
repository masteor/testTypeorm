import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {CartridgeType} from "../entity/CartridgeType";
import {ICommonController} from "./CommonController";

export class CartridgeTypeController implements ICommonController {

    private cartridgeTypeRepository = getRepository(CartridgeType);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.cartridgeTypeRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.cartridgeTypeRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.cartridgeTypeRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let cartridgeTypeToRemove = await this.cartridgeTypeRepository.findOne(request.params.id);
        await this.cartridgeTypeRepository.remove(cartridgeTypeToRemove);
    }
}

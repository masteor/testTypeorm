import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Printer} from "../entity/Printer";
import {ICommonController} from "./CommonController";

export class PrinterController implements ICommonController {

    private printerRepository = getRepository(Printer);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.printerRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.printerRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.printerRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let toRemove = await this.printerRepository.findOne(request.params.id);
        await this.printerRepository.remove(toRemove);
    }
}

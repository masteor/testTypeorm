import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {PrinterType} from "../entity/PrinterType";
import {ICommonController} from "./CommonController";

export class PrinterTypeController implements ICommonController {

    private printerTypeRepository = getRepository(PrinterType);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.printerTypeRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.printerTypeRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.printerTypeRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        await
            this.printerTypeRepository.remove
            (
                await
                    this.printerTypeRepository.findOne(request.params.id)
            );
    }
}

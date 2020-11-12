import {NextFunction, Request, Response} from "express";

export interface ICommonController {
    all(request: Request, response: Response, next: NextFunction);
    one(request: Request, response: Response, next: NextFunction);
    save(request: Request, response: Response, next: NextFunction);
    remove(request: Request, response: Response, next: NextFunction);
}

export class CommonController implements ICommonController {

    all(request: any, response: any, next: any) {
        throw new Error("Method not implemented.");
    }

    one(request: any, response: any, next: any) {
        throw new Error("Method not implemented.");
    }
    save(request: any, response: any, next: any) {
        throw new Error("Method not implemented.");
    }
    remove(request: any, response: any, next: any) {
        throw new Error("Method not implemented.");
    }
}

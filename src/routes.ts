import {CabinetController} from "./controller/CabinetController";
import {CartridgeCompatibilityController} from "./controller/CartridgeCompatibilityController";
import {CartridgeController} from "./controller/CartridgeController";
import {CartridgeTypeController} from "./controller/CartridgeTypeController";
import {ComputerController} from "./controller/ComputerController";
import {PrinterController} from "./controller/PrinterController";
import {PrinterTypeController} from "./controller/PrinterTypeController";
import {RequestStatusController} from "./controller/RequestStatusController";
import {RequestTypeController} from "./controller/RequestTypeController";
import {StaffController} from "./controller/StaffController";

export const Routes:Array<any> = []
    .concat(getRoute(CabinetController, 'cabinet'))
    .concat(getRoute(CartridgeCompatibilityController, 'cartridge-compatibility'))
    .concat(getRoute(CartridgeController, 'cartridge'))
    .concat(getRoute(CartridgeTypeController, 'cartridge-type'))
    .concat(getRoute(ComputerController, 'computer'))
    .concat(getRoute(PrinterController, 'printer'))
    .concat(getRoute(PrinterTypeController, 'printer-type'))
    .concat(getRoute(RequestStatusController, 'request-status'))
    .concat(getRoute(RequestTypeController, 'request-type'))
    .concat(getRoute(StaffController, 'staff'));

/**
 * @param controller
 * @param prefix
 */
function getRoute<T>(controller: T, prefix:string): Array<any> {
    return [
        {
            method: "get",
            route: `/${prefix}`,
            controller: controller,
            action: "all"
        }, {
            method: "get",
            route: `/${prefix}/:id`,
            controller: controller,
            action: "one"
        }, {
            method: "post",
            route: `/${prefix}`,
            controller: controller,
            action: "save"
        }, {
            method: "delete",
            route: `/${prefix}/:id`,
            controller: controller,
            action: "remove"
        }
    ];
}

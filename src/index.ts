import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import * as cors from "cors"

createConnection().then(async connection => {

    // create express app
    const app = express();

    app.use(cors())

    let demoLogger = (req, res, next) => {
        let current_datetime = new Date();
        let formatted_date =
            current_datetime.getFullYear() +
            "-" +
            (current_datetime.getMonth() + 1) +
            "-" +
            current_datetime.getDate() +
            " " +
            current_datetime.getHours() +
            ":" +
            current_datetime.getMinutes() +
            ":" +
            current_datetime.getSeconds();
        let method = req.method;
        let url = req.url;
        let status = res.statusCode;
        let log = `[${formatted_date}] ${method}:${url} ${status}`;
        console.log(log);
        next();
    };

    app.use(demoLogger);
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000, () => {
        console.log("Сервер запущен на порту 3000")
    });

/*    await connection.manager.save(connection.manager.create(User, {
        firstName: "Phantom",
        lastName: "Assassin",
        age: 24
    }));*/

    console.log("Express server has started on port 3000. Open http://localhost:3000/ to see results");

}).catch(error => console.log(error));

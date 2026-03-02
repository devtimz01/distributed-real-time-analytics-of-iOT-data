import { Module } from "@nestjs/common";
import { WebsocketGateway } from "./web-socket";

@Module({
    imports:[],
    providers:[WebsocketGateway],
    controllers:[],
    exports:[WebsocketGateway]
})

export class WebsocketModule{}
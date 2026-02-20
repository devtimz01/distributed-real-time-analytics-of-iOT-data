import { Global, Module } from "@nestjs/common";
import { LoggerInstance } from "./log";

@Global()
@Module({
    imports:[],
    exports:['LOGGER'],
    providers:[ {
      provide: 'LOGGER',
      useValue: LoggerInstance
    }],
})

export class LogModule{}
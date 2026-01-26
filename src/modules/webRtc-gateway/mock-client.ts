import { io } from "socket.io-client";
import { IbodyMetrics } from "../Body-metrics/interface-body-metrics";

const socket = io('http://localhost:3000')
socket.on('connect',()=>{
    console.log('client connected')
})

socket.emit('real-time-data',{
    id:'',
} as IbodyMetrics)

import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({cors:true})
class SocketIoServer{
    @WebSocketServer()
    server:Server
    @SubscribeMessage('body-metric')
    async getRealTimeUpdate(@MessageBody() data:{

    },@ConnectedSocket() client:Socket){
        
    }
};
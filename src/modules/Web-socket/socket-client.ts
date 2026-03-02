import {io} from 'socket.io-client'

const socket = io('https://localhost/4000',{
    auth:{
        userId:''
    }
})

socket.on('dashboard',(data)=>{
    console.log(data.message)
});


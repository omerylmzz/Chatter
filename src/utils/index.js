import { io } from "socket.io-client";


export const socket = io.connect('http://10.0.2.2:4000/');

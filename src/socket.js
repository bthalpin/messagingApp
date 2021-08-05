import {io} from "socket.io-client";

const URL = "https://socially-distanced-server.herokuapp.com/";
const socket = io(URL);

export default socket;
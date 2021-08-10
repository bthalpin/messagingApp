import {io} from "socket.io-client";

// const URL = "https://socially-distanced-server.herokuapp.com/";
const URL = "http://localhost:3005"
const socket = io(URL);

export default socket;
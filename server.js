/**
 * This file will be starting point of all the other files
 * This file will create the server instance with the use of http core module
 * which will  use request and response functionalities to communicate with the frontend/browser
 *
 */

//info
const http = require("http");

const routes = require("./routes");

console.log("routes", routes);
// server instance which is  listening for request and will be providing the response  as per need
const server = http.createServer(routes);

// request source/ source for which server instance will listen the request
server.listen(3000, "localhost");

/**
 * This file will be starting point of all the other files
 * This file will create the server instance with the use of http core module
 * which will  use request and response functionalities to communicate with the frontend/browser
 *
 */

//info
const http = require("http");

// server instance which is  listening for request and will be providing the response  as per need

const server = http.createServer((req, res) => {
  const url = req.url; //* route
  let data = [];

  if (url === "/contact") {
    //* create the contactus page
    res.write(`<style>
* {
box-sizing: border-box;
}

/* Style inputs */
input[type=text], select, textarea {
width: 100%;
padding: 12px;
border: 1px solid #ccc;
margin-top: 6px;
margin-bottom: 16px;
resize: vertical;
}

input[type=submit] {
background-color: #04AA6D;
color: white;
padding: 12px 20px;
border: none;
cursor: pointer;
}

input[type=submit]:hover {
background-color: #45a049;
}

/* Style the container/contact section */
.container {
border-radius: 5px;
background-color: #f2f2f2;
padding: 10px;
}

/* Create two columns that float next to eachother */
.column {
float: left;
width: 50%;
margin-top: 6px;
padding: 20px;
}

/* Clear floats after the columns */
.row:after {
content: "";
display: table;
clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
.column, input[type=submit] {
width: 100%;
margin-top: 0;
}
}
</style><div class="-contact-container">
<div style="text-align:center">
  <h2>Contact Us</h2>
  <p>Swing by for a cup of coffee, or leave us a message:</p>
</div>
<div class="row">
  <div class="column">
    <img src="https://inovative-tech.com/images/contact-us.jpg" style="width:100%">
  </div>
  <div class="column">
    <form action="/contact-data" method="POST">
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstName" placeholder="Your name..">
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastName" placeholder="Your last name..">
      <label for="country">Country</label>
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
      <input type="submit" value="Submit">
    </form>
  </div>
</div>
</div>`);
    return res.end();
  } else if (url === "/contact-data") {
    //? get data from browser
    req.on("data", (chunk) => {
      data.push(chunk);
    });

    //? make fetched data to readable format
    req.on("end", () => {
      if (data) {
        data = Buffer.concat(data).toString();
        const splited_data = data.split("=");
        console.log("Splited Data: ", splited_data);

        res.write(`<div class="container">
        <div style="display: flex; justify-content: center; align-items: center;">
        <span> FirstName:  ${splited_data[1].split("&")[0]}</span>
        <hr> </hr>
        <span> LastName:  ${splited_data[2].split("&")[0]}</span>
        <hr />
        <span> Country: ${splited_data[3].split("&")[0]}</span>
        <hr />
        <span> Subject:  ${splited_data[4]}</span>
        </div>
    </div> `);
        return res.end();
      } else {
        console.log("Data was not found!");
        return res.end();
      }
    });
  } else {
    res.write(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>NodeJS Title </title>
  </head>
  <body>
          <div class="main-container">
              <div class="sub-wrapper"> 
                  <h2>
                      This is Page for Home
                  </h2>
              </div>
          </div>
  </body>
  </html>`);

    res.end();
  }
});

// request source/ source for which server instance will listen the request
server.listen(3000, "localhost");
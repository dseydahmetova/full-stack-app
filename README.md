# full-stack-app MERN Travel APP

## Introduction
As an aspiring traveler I wanted to be able to access most famous State Parks of USA  data so that I can track and display my previously completed and future trips. This app is designed as a resource for searching new places and destinations for your trip.


## MERN
The Project full CRUD app using the technologies outlined below.

- using the MERN stack: Node.js, MongoDB/Mongoose, Express and React.
- two models with full CRUD: user and places.
 - followed proper MVC backend structure (models, controllers, routes in separate folders)
 - uses React Router 
- includes sign up/login (authentication) functionality, with encrypted passwords & an authorization flow
- uses axios, local storage, and JWT tokens
- uses  CSS framework for styling:  Bootstrap, MaterialUI
- maintaines a structure by creating model and Schema using mongoose.

### Live Demo: https://

### Configuration and Setup
1. In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.
2. Open the project in your prefered code editor.
3. Go to terminal -> New terminal (If you are using VS code)
4. Split your terminal into two (run the client on one terminal and the server on the other terminal)
5. In the first terminal
```
$ cd client
$ npm install (to install client-side dependencies)
$ npm start (to start the client)
```
6. In the second terminal
```
$ cd server
$ nodemon server
```

## Troubleshooting:
1.  ` POST http://localhost:8080/places net::ERR_FAILED 413 (Payload Too Large)`
Solution:  Nginx server running in front of your node one, which has a default size limit small. The HTTP 413 Content Too Large response status code indicates that the request entity is larger than limits defined by server; the server might close the connection or return a Retry-After header field. to fix this issue added the following code to server,js on backend

```` const bodyParser = require('body-parser');            
app.use(bodyParser.json({limit:'50mb'})); 
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'})); ```


2. `Bootstrap Navbar toggle elements did not stay in one line`
Solution: It's because of media queries, so on smaller screens it changes the style. Adding these style attributes fixed this issue:

 ```.navbar-nav {
    float: right;
  margin: 0;
  }
  .navbar-nav > li {
    float: right;
  }
```

**Screenshots:**
# ERD Diagram
<!-- * erd
![home page ](https://github.com/dseydahmetova/full-stack-app/blob/brokencode/readmeImg/Capture.JPG?raw=true/)
 
* 
![home](https://github.com/dseydahmetova/full-stack-app/blob/brokencode/readmeImg/homePage.JPG?raw=true) 



## Contributing
Don't hesitate to add some code and submit a pull request.

## Author
👤 Dana Seidakhmetova

* GitHub: @dseydahmetova
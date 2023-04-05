# full-stack-app

### Programming Language : `HTML, CSS, Vanilla Java Script`

#### Built with: `Visual Studio`

### Live Demo: https://

### Some used basic Git commands:

```
git status
git add
git commit
```
## Errors:
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

<!-- * welcome page of the game
![welcome page ](https://)
 
* Tic-Tac-Toe
![user](https://) -->



## Contributing
Don't hesitate to add some code and submit a pull request.

## Author
👤 Dana Seidakhmetova

* GitHub: @dseydahmetova
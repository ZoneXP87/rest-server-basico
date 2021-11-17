require('dotenv').config();

const Server = require('./models/server');


const server = new Server();
server.listen();




/*****************************/
// var URL = require('url').URL;
// const myURL = new URL('https://example:8080');

// console.log(myURL.port);
// myURL.port = '443';
// console.log(myURL.port);

// myURL.port = 1234;
// console.log(myURL.port);
// console.log(myURL.href);

// myURL.port = 'abcd';
// console.log(myURL.port);

// myURL.port = '567abcd';
// console.log(myURL.port);
// myURL.port = 1234.5678;
// console.log(myURL.port);
// console.log(myURL.href);



// try {
//     const m = 1;
//     const n = m + z;

//     console.log(n)
// } catch (error) {
//     console.log(error.name)
// }


// const user = {
//     hello: 'Hola mundo',
//     sayWelcome() {
//         console.log(this.hello);
//     }
// }

// setTimeout(() => {
//     user.sayWelcome()
// }, 500);
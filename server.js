'use strict';

// make variable to use express library:
const expressLibrary = require('express');

// to has all express properties and methods:
const server = expressLibrary();
const PORT = process.env.PORT || 3000;

// to access a file in the public directory
server.use(expressLibrary.static('./public'));

// route definitions
// localHost:3000/
server.get('/',(request,response)=>{
    response.send('route')
    // response.render('dist/index')
});

// localHost:3000/test 
server.get('/test',(request,response)=>{
    response.send('Server Is Alive')
})

// localHost:3000/data 
server.get('/data',(request,response)=>{
    let names = [
        { userName: 'Wafa'},
        { userName: 'Dania'},
        { userName: 'Tasnim'},
        { userName: 'Heba'}
    ]
    response.json(names)
})

// server listening
server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})


const express = require('express')
const nunjucks = require('nunjucks')
const fetch = require('node-fetch')
const logger = require('morgan')
const users = require('./users')

console.log(users)

const app = express()
const fs = require('fs');

// Configuring the nj path as /templates
nunjucks.configure('templates', {
    autoescape: true,
    express: app
})

// Log requests to console
app.use(logger('dev'))

function fetchUsers() {
    return fetch('https://randomuser.me/api/?results=100&nat=nl')
    .then((res)=> (res.json()))
}



function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
    }

var chars = [].concat.apply([], Array(26))
              .map(function(_, i) { return String.fromCharCode(i+65); })
              .join();


chars = chars.split(',')

for(char of chars){
    
}

app.get('/',function(request, response) {
        response.render('index.html', {users: users,  chars: chars})

    });

app.get('/contact/:name', function(request, response) {
    let testName = String(request.params.name)
    console.log(typeof(testName))
    testName = testName.replace(/\s|_/g,'')

    console.log(testName)
    let realUser = undefined
    for(user of users){
        console.log(String(user.name.first + user.name.last).replace(/\s/g,'') )
        if(user.name.first + user.name.last === testName){
            realUser = user;
            break;
        }
    }
    response.render('userdetail.html', {user:realUser} )
})
    



app.listen(1332, () => {console.log( "app running on port 3080")})
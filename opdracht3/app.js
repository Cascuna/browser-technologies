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
let actualChars = []

function reformatChars(users){
    let responseArray = []
    for(char of chars){
        for(user of users){
   
            if(user.name.first.charAt(0).toUpperCase() == char){
                responseArray += char
                break 
            }
        }
    }  
    return responseArray
}

actualChars = reformatChars(users)

app.get('/',function(request, response) {
        response.render('index.html', {users: users,  chars: actualChars})

    });

app.get('/contact/:name', function(request, response) {
    console.log(request.get('Referrer'))
    let testName = String(request.params.name)
    testName = testName.replace(/\s|_/g,'')
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
    
app.get('/search', function(request, response) {
    let query = request.query.searchquery

    let matchingUsers = []
    let matchingChars = []
    for(user of users){

        if(user.name.first.toUpperCase().includes(query.toUpperCase()) ||
        user.name.last.toUpperCase().includes(query.toUpperCase())) {

            matchingUsers.push(user) 

        } 
    }
    if(matchingUsers[0] === undefined ){
        var searchResponse = 'Geen zoek resultaten gevonden op uw parameters'
        matchingUsers = users
        matchingChars = actualChars
    }
    else { matchingChars = reformatChars(matchingUsers) }
    response.render('index.html', {users: matchingUsers,  chars: matchingChars, response: searchResponse})
})



app.listen(1332, () => {console.log( "app running on port 3080")})
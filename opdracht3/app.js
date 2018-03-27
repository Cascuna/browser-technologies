const express = require('express')
const nunjucks = require('nunjucks')
const fetch = require('node-fetch')
const app = express()

// Configuring the nj path as /templates
nunjucks.configure('templates', {
    autoescape: true,
    express: app
})

function fetchUsers() {
    return fetch('https://randomuser.me/api/?results=100&nat=nl')
    .then((res)=> (res.json()))

}

var chars = [].concat.apply([], Array(26))
              .map(function(_, i) { return String.fromCharCode(i+65); })
              .join();

app.get('/',function(request, response) {
    fetchUsers().then((result) => {
        console.log(result.results)
        response.render('index.html', {users: result.results, chars: chars})
    })
   
}) 


app.listen(1332, () => {console.log( "app running on port 3080")})
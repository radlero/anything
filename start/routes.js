'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')
const User = use('App/Models/User')

Route
    .get('/', ({ request, response, view }) => {
        return view.render('welcome')
    })
    .as('welcome')

Route
    .get('/login', ({ request, response, view }) => {
        return view.render('login')
    })
    .as('login')
Route
    .get('/register', ({request, response, view}) => {
        return view.render('register')
    })
    .as('register')
Route
    .post('/register', async ({ request, response }) => {
        let username = await request.input('username')
        let email = await request.input('email')
        let password = await request.input('password')
        console.log(username,email, password)
        const user = new User()
        user.username = username
        user.email = email
        user.password = password
        console.log(await user.save())

        return await response.send("We have received your form submission")
        
    }).validator('StoreUser')
        
Route
    .post('/login', async ({ request, response }) => {
        let username = await request.input('username')
        let password = await request.input('password')
        console.log(username, password)
        return await response.send("Thank you for logging in")
      
    })

    
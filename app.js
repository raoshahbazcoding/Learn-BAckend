// const { log } = require('console')
// const http = require('http')



// // Here We Are Only Creating Server
// const server = http.createServer((req,res)=>{
//     // res.end('Hello World')
//     if (req.url == '/about') {
//         console.log(req.url);
//         res.end("Hellow This Is About Page")
//     }
//     if (req.url == "/rao") {
//         console.log(req.url + " This Is Rao Sab Area");
//         res.end("This Is Rao Sab Area")
        
//     }
// })


// // 
// server.listen(3000)



const morgan = require('morgan')
const express = require('express')
const dbConnection = require('./config/db')
const userModel = require('./models/user')

// This IS For When Can Use All Express Tools Like get, post and everyting
const app = express();


// This Middle ware For Showing Data In terminal Because Express By default not showing data in terminal

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// USe Built In MiddleWare For Use or link Stitic Files

app.use(express.static('public'))


// this Is Third Party Middlewar || This Will Show Route Method (post , get) req status , and response time
app.use(morgan('dev')) // Now this Will Run For Every Route


// custom Middle Ware
// app.use((req,res,next)=>{
//     console.log("This Will Run On each Route When get Hit" , req.url);
//     return next();
// })

// This Is For Using Ejs
app.set('view engine','ejs')


// This Is Where We Are MAking New Routes and also method for specific route midleware
// app.get('/',(req,res,next)=>{
//     console.log("You Are In Middleware");
//     const a = 90+89;
//     console.log(a);
    
//     next();
// },(req,res)=>{
//     res.render('index')
// })


app.get('/',(req,res)=>{
    console.log(req.url);
    res.render('index')  
})

app.get('/register' ,(req,res)=>{
   res.render('register')
    
})

app.post('/register' , async(req,res)=>{
   console.log(req.body);

    // Destructur the Body 
    const {username, email , password} = req.body

    // for Creating User In database
  await  userModel.create({
        username:username,
        email:email,
        password:password,
    })

   res.send("User Registerd")
})


app.get('/about',(req,res)=>{
    res.send("You Are On About Us Page")
})
app.get('/contact',(req,res)=>{
    res.send("You Are On contact Us Page")
})


// from fronted to get data on server sside USe Post Method its also not shoieng things in URl
app.post('/form-data' , (req,res)=>{
    console.log(req.body);
    res.send('Data Recieved')
    
})

app.listen(3000)
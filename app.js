const express = require('express')
const path= require("path")
const fs = require("fs")
const app = express()
const port = 80

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use('/static',express.static('static'))
app.use(express.urlencoded());

// For template engine

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'views'))

// Endpoints

app.get('/',(req,res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title':"Ritik's Portfolio Website", 'content': con}
    res.status(200).render('home.pug',params)
})

app.get('/intro',(req,res)=>{
  const con = "This is the best content on the internet so far so use it wisely"
  const params = {'title':"Introduction", 'content': con}
  res.status(200).render('intro.pug',params)
})

app.get('/services',(req,res)=>{
  const con = "This is the best content on the internet so far so use it wisely"
  const params = {'title':"Services", 'content': con}
  res.status(200).render('services.pug',params)
})
app.get('/projects',(req,res)=>{
  const params = {'title':"My Projects"}
  res.status(200).render('projects.pug',params)
})
app.get('/contact',(req,res)=>{
    const params = {'title':"Contact me"}
    res.status(200).render('contact.pug',params)
})
app.post('/contact',(req,res)=>{
  const params = {'title':"Form Submitted Successfully"}
  // Your AccountSID and Auth Token from console.twilio.com
  console.log(req.body)
  let obj = req.body;
  name1 = obj.name
  phone= obj.phone
  email = obj.email
  enquiry = obj.enquiry
  msg = `Hii I am ${name1} and my phone number is ${phone} and my mail id is ${email}. ${enquiry}.`
const accountSid = 'AC2ec180758d091aed429a2ef2e00b712a';
const authToken = '4a7321ce2b009b9eaf92568aba877025';

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: msg,
    to: '+91 70159 27538', // Text your number
    from: '+19843685215', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
  res.status(200).render('contact.pug',params)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
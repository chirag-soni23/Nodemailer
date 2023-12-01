const nodemailer = require("nodemailer");
let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "csoni0692@gmail.com",
        pass:"mfotpcbkzycbcgju"
    }
})

let details = {
    from: "csoni0692@gmail.com",
    to: "csoni0693@gmail.com",
    subject: "Testing our nodemailer",
    text:"hello world",
    html:"<h1>Hello Guys 🖐</h1>"
}
mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log("it has an error",err)
    }
    else{
        console.log("email has send");
    }
})
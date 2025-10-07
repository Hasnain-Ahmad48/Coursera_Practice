

function sendWelcome(email){
    console.log(`wellcome message to ${email}`)
}

const users=[
    {name:"Hasnain", email:"hasain@gmail.com"},
    {name:"Ahmad",email:"Ahmad123@gmail.com"}
]

users.forEach((users)=>{
    sendWelcome(users.email)
})
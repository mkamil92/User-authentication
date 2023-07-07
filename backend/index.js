const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

const Users = require("./users.model");
mongoose.connect('mongodb://127.0.0.1:27017/Authentication', {useNewUrlParser: 'true'}).then(()=>{
    console.log("mongodb connected successfully")
}
).catch((error)=>{
console.log(" Failed mongodb connected",error)
})

app.post('/register', async (req, res)=>{
    
    const {name, email, password} = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10)
    try{
        const isUserExits = await Users.findOne({email: email});
        if(isUserExits){
            return res.status(400).json({error:"user already exists"});
        }
        await Users.create({
            name: name,
            email: email,
            password: encryptedPassword,
        })
        res.status(200).json({status: "ok", message:"user registered successfully"})
    }
    catch(err){
        res.status(400).json({error:"user already exists"});
    }
    

})

app.post('/sign-in', async (req, res)=>{
    
    const { email,password } = req.body;

    const user = await Users.findOne({email: email});
    if(!user){
        return res.status(400).json({error: "user not found"});
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(isPasswordValid){
        const token = jwt.sign({
            name: user.name,
            email: user.email,
        },
        'secret786'
        )
        return res.json({status:'ok', user: token})
    }
    else{
        return res.status(400).json({error: "user not found"});
    }
    
})


app.listen(1337,()=>{
    console.log("Server started listening on 1337...");
})
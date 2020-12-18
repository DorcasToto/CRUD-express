const { request } = require("express")
const express = require("express")
const db = require("../db/index")
const router = express.Router()

router.get('/',(req,res,next)=>{
res.status(401).send('tests')
})
router.get('/users',async(req,res,next)=>{
    try{
        let users = await db.all()
        console.log(users);
        res.status(200).send(users)
    }
    catch(ex){
        console.log(ex)
        res.status(500).send(ex)
    }
})

router.get('/users/:id',async(req,res,next)=>{
    try{
        let users = await db.one(req.params.id)
        console.log(users);
        res.status(200).send(users)
    }
    catch(ex){
        console.log(ex)
        res.status(500).send(ex)
    }
})

router.delete('/users/:id',async(req,res,next)=>{
    try{
        let users = await db.delete(req.params.id)
        console.log(users);
        res.status(200).send(users)
    }
    catch(ex){
        console.log(ex)
        res.status(500).send(ex)
    }
})

router.post('/users/',async(req,res,next)=>{
    let userData = req.body
    try{
       
        await db.post(userData.fname,userData.lname,userData.password)
        res.status(200).send(userData)
    }
    catch(ex){
        console.log(ex)
        res.status(500).send(ex)
    }
})
router.put('/users/',async(req,res,next)=>{
    let userData = req.body
    try{
        await db.put(userData.fname,userData.lname,userData.password,userData.id)
        res.status(200).send(userData)
    }
    catch(ex){
        console.log(ex)
        res.status(500).send(ex)
    }
})

module.exports = router
import { Router } from "express";


const router = Router();

router.get("/server/:id/test", (req, res) =>{
    if("123" === req.params.id) {
        res.status(200).send({Message: "Working"})  
    } else {
        res.send({Error: "U dont have the premsions to see this channel"})
    }
})

router.get("/server/:id", (req, res) =>{
    if("123" === req.params.id) {
        res.send(req.params)   
    } else {
        res.send({Error: "U dont have the premsions to see this channel"})
    }
})

router.get("/key", (req, res) =>{
    if(!req.query.token) return res.send({Error: "no token in query"})
    if(req.query.token === "bassoMC") {
        res.send({token: "Your token is correct your token is" +  " " + req.query.token})
    } else {
        res.send({error: "invalid token"})
    }
})


export default router;
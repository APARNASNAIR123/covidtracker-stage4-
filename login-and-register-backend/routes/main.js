// const Post = require("../models/Post")
// const Message = require("../models/Message")
// const Express = require("express")
// const router = Express.Router()


// router.post("/post", (req, res)=> {
//     const {symptoms,testdate,selfisolation,medicalcenter,medicinestatus,issues,email} = req.body
//             const post = new Post({
//                 symptoms,
//                 testdate,
//                 selfisolation,
//                 medicalcenter,
//                 medicinestatus,
//                 issues,
//                 email,
               
//             })
//             post.save(err => {
//                 if(err) {
//                     res.send(err)
//                 } else {
//                     res.send( {post })
//                 }
//             })
          
//         })
//         router.post("/msg", (req, res)=> {        
//             const {uid,msg,reply} = req.body
//             const message = new Message({
//                 uid,
//                 msg,
//                 reply,
//                 })
        
//             message.save(err =>{
//                 if(err){
//                     res.send(err)
//                 }else{
//                     res.send({message})
//                 }
//             })    
//         })
        
//         router.get("/msg/:uid", (req, res)=> {        
//             const uid = req.params.uid
//             Message.find({ uid: uid}, (err, msg) => {
//                 res.send({msg})
//             })
        
//         })
        

// module.exports = router        

const Post = require("../models/Post")
const Message = require("../models/Message")
const Express = require("express")
const router = Express.Router()


router.post("/post", (req, res)=> {
    const {symptoms,testdate,selfisolation,medicalcenter,medicinestatus,issues,email} = req.body
            const post = new Post({
                symptoms,
                testdate,
                selfisolation,
                medicalcenter,
                medicinestatus,
                issues,
                email,
               
            })
            post.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( {post })
                }
            })
          
        })

router.post("/msg", (req, res)=> {        
    const {uid,msg,reply,toId} = req.body
    const message = new Message({
        uid,
        msg,
        reply,
        toId,
        })

    message.save(err =>{
        if(err){
            res.send(err)
        }else{
            res.send({message})
        }
    })    
})

router.get("/msg/:uid", (req, res)=> {        
    const uid = req.params.uid
    Message.find({ uid: uid}, (err, msg) => {
        res.send({msg})
    })

})

router.post("/reply", (req, res)=> {        
    const {target,reply} = req.body
    const query = {"_id":target}
    const data = {reply}

    Message.updateOne(query,data,(err,msg)=>{
            // console.log(err)
            // console.log(msg)
            // console.log(query)
            if(err){
                res.send(false)
                console.log("inside err")
            }
            res.send(true)
            // Message.find({target}, (err, msg) => {
            //     console.log(msg)
            //     res.send({msg})
            // })

     
})
})
router.get("/reply/:toId", (req, res)=> {        
    const toId = req.params.toId
    Message.find({ toId: toId}, (err, msg) => {
        res.send({msg})
    })

})

module.exports = router
import React, { useEffect, useState } from "react"
import "./chat.css"
import axios from "axios"

const ChatHW = ({toId}) => {
    const [target,setTarget]=useState("")
    const [reply,setReply]=useState("")
    const [chats , setChats]= useState([
        {           "_id":"",
                    "uid":"",
                    "msg":"",
                    "reply":"",
                    "toId":"",
                }
    ])

    useEffect(()=>{
        getMsg()
    },[])
     
    const handleChange = e => {
        // console.log(e.target.value)
        setReply(e.target.value)
        // console.log(msg)
    }
    const onSend = ()=>{
        if(target==""){
            alert("Select any message to reply")
            return
        }
        //  uid=3456
        // const reply =""
        const replyMsg ={
            target,
            reply,
        }
        console.log(replyMsg)
        axios.post("http://localhost:8000/api/main/reply", replyMsg)
        .then(res => {
            console.log(res.data)
            if(res.data){
                // const data = {
                //             "_id":res.data.msg._id,
                //             "uid":res.data.msg.uid,
                //             "msg":res.data.msg.msg,
                //             "reply":res.data.msg.reply,
                //             "toId":res.data.msg.toId,
                //         }
                //     // console.log(res);
                //     setChats([...chats,data])
                    setTarget("")
                    setReply("")
                    getMsg()
                }
                
        })
    }


    const onReply=(id)=>{
        alert(id)
        setTarget(id)
    }
     const getMsg = ()=>{
        
        axios.get(`http://localhost:8000/api/main/reply/${toId}`)
        .then(res => {
            
            const messages = res.data.msg
            // console.log(res.data.msg)
            const msgArray = []
            messages.map((message)=>{
               // console.log(message.msg)
                msgArray.push(
                    {"_id":message._id,
                    "uid":message.uid,
                    "msg":message.msg,
                    "reply":message.reply,
                    "toId":message.toId,
                })
            })
            // console.log(msgArray)
            setChats(msgArray)
                     
        })
    }

    return (
        <div className="chat-view" >
            <div className='chat-box'>
                <input type='text' value={reply} onChange={handleChange}></input>
                <button onClick={onSend}>Send</button>
            </div>
            <div className='chat-list'>
                
                    {chats.map(chat=> (
                        <div className='chat-item'> 
                            <div className={target==chat._id?'chat-item-selected':'chat-item-msg'} onClick={()=>setTarget(chat._id)}>
                                {chat.msg}
                                
                            </div>
                            
                            <div className={chat.reply?'chat-item-reply':'chat-item-none'}>{chat.reply}</div>

                        </div>


                    ))}
                       {/* <div className='chat-item'>{chats[1]}</div> */}
                       {/* {console.log(chats[0])} */}
                  
                
            </div>
            
        </div>
    )
}

export default ChatHW
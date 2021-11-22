import React from "react";
import ChatHW from './chat-h';
import Chat from './chat';
function Chatbase({user})
{
    return(
        <>
       
      { console.log(user._id)}
      {/* {user.type === "patient" ? <Chat uid={user._id} toId={2} /> : <ChatHW  toId={2}/>} */}
      {/* {user.type === "patient" ? <Chat uid={3} toId={2} /> : <ChatHW  toId={2}/>} */}
      {user.type === "patient" ? <Chat uid={user._id} toId={'619a41a73694ba86c41ab0f0'} /> : <ChatHW  toId={'619a41a73694ba86c41ab0f0'}/>}
      </>
    )
}
export default Chatbase;
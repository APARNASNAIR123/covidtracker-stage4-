// import './App.css'
// import Homepage1 from "./components/homepage1/homepage1"
// import Login from "./components/login/login"
// import Register from "./components/register/register"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useEffect, useState } from 'react';
// import MainPage from './components/main/main';
// import Chat from './components/chat/chat';
// import Homepage from './components/homepage/homepage';
// import Chatbase from './components/chat/chatbase';

// function App() {

//   const [ user, setLoginUser] = useState({})

//   useEffect(() => {
//     setLoginUser(JSON.parse(localStorage.getItem("myUser5")))
//   }, [])

//   const updateUser = (user) => {
//     localStorage.setItem("myUser5", JSON.stringify(user))
//     setLoginUser(user)
//   }

//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route path="/home">
//             {
//               user && user._id ? <Homepage1 updateUser={updateUser} /> : <Login updateUser={updateUser}/>
//             }
//           </Route>
//           <Route exact path="/">
//             <MainPage></MainPage>
//           </Route>
//           <Route path="/login">
//             <Login updateUser={updateUser}/>
//           </Route>
//           <Route path="/register">
//             <Register />
//           </Route>
//           <Route path="/homepage">
//             <Homepage />
//           </Route>
//           <Route path="/chat">
//           {
            
//               <Chatbase user={user}/>
//           } 
           
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;

import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import MainPage from './components/main/main';
import Chat from './components/chat/chat';
import ChatHW from './components/chat/chat-h';
import Chatbase from './components/chat/chatbase';
import Homepage1 from "./components/homepage1/homepage1"

function App() {

  const [ user, setLoginUser] = useState({ name: "",
  address:"",
  phoneno:"",
  age:"",
  vaccinated:"",
  type:"",
  district:"",
  village:"",
  ward:"",
  email: "",
  password: "",
  reEnterPassword: "" })

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("myUser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            {
              user && user._id ? <Homepage1 updateUser={updateUser} /> : <Login updateUser={updateUser}/>
            }
          </Route>
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser}/>
          </Route>
          <Route path="/register">
            <Register />
            </Route>
            <Route path="/homepage">
            <Homepage />
            </Route>
          <Route path="/chat">
          {
              // user.type === "patient" ? <Chat uid={user._id} toId={2} /> : <ChatHW  toId={2}/>
              <Chatbase user={user}/>
          } 
          
          {/* <Route path="/chat">
          {
              <Chat  /> 
          } 
          */}

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
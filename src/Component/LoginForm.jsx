import React, { useState } from "react";
import { useUserContext } from "../Context/userContext";
const LoginForm = () => {
  const [data,setData] = useState({
    username:'',
    password:''
  });

  const { login } = useUserContext();
  const handleEvent=(e)=>{

      setData((preData)=>{
        return {
          ...preData,
          [e.target.name] : e.target.value
        }
      })
  }
  const submit = (e)=>{
    e.preventDefault();
    login(data.username,data.password);
    
  }
  

  return (
    <div className="login">
      <form onSubmit={submit}>
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={data.username}
              onChange={handleEvent}
              
            />
          </div>
          
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleEvent}
            />
          </div>
          
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
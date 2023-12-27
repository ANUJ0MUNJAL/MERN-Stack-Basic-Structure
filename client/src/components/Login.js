import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
const Login = () => {
     const history = useNavigate();
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');

     const LoginUser=async (e)=>{
         e.preventDefault();

         const res= await fetch("/signin",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
              email,
              password
          })
     });
     const data=res.json();
     if(res.data===400||!data){
      window.alert("Not valid");
     }else{
      window.alert("Valid");
      history("/");
     }

     }
  return (
   
<main class="form-signin w-100 m-auto hello">

<div class="container">

  <h2 class="login-title">Login</h2>

  <form  method="POST"class="login-form">
    <div>
      <label for="email">Email </label>
      <input
             id="email"
             type="email"
             placeholder="me@example.com"
             value={email}
             onChange={(e)=> setEmail(e.target.value)}
             name="email"
             required
             />
             <label for="password">Password </label>
      <input
             id="password"
             type="password"
             name="password"
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
             required
             />
    </div>


    <button class="btn btn--form" type="submit" value="Log in" onClick={LoginUser}>
      Login
    </button>


  </form>
</div>
</main>

  )
}

export default Login
import React , {useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Signup = () => {
     const history =useNavigate();
     const [user, setUser]=useState({
      name:"",email:"",contact:"",password:"",cpassword:""
     })
     let name,value;
     const handleInputs =(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
     }


  const PostData = async (e)=>{
         e.preventDefault();
         const {name,email,contact,password,cpassword}=user;
         const res= await fetch("/register",{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify({
                name,email,contact,password,cpassword
              })
         });
         const data = await res.json();
         console.log(data);
         if(data.status===422 || !data){
          window.alert("invalid");
          console.log("notConnected");
         }else{
          window.alert("valid");
          console.log("Connected");
          history("/about");
         }
  }
  return (
    
<main className="form-signin w-100 m-auto hello">

<div className="container">

  <h2 className="login-title">Register</h2>

  <form className="login-form">
    <div>
    
              <label for="name">Name</label>
      <input
             id="name"
             type="text"
             value={user.name}
             onChange={handleInputs}
             name="name"
             required
             />
      <label for="email">Email </label>
      <input
             id="email"
             type="email"
             value={user.email}
             onChange={handleInputs}
             placeholder="me@example.com"
             name="email"
             required
             />
              <label for="contact">Contact</label>
      <input
             id="contact"
             type="number"
             value={user.contact}
             onChange={handleInputs}
             name="contact"
             required
             />

<label for="password">Password</label>
      <input
             id="password"
             type="password"
             value={user.password}
             onChange={handleInputs}
             name="password"
             required
             />
              <label for="confirmpassword">Confirm Password</label>
      <input
             id="confirmpassword"
             type="password"
             value={user.cpassword}
             onChange={handleInputs}
             name="cpassword"
             required
             />
    </div>
     

    <button className="btn btn--form" type="submit" value="Log in" onClick={PostData}>
      Sign Up
    </button>


  </form>
</div>
</main>

  )
}

export default Signup
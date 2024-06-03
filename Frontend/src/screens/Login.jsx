import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";

const Login = () => {
  let navigate=useNavigate();
    const [credentials, setCredentials] = useState({email:"",password:""})  

    const handleSubmit=async (e)=>{
        e.preventDefault();   
        const response= await fetch("https://food-web-backend.vercel.app/loginuser",{  
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify( {email:credentials.email,password:credentials.password})
        })
        const json=await response.json()
        console.log(json);
        if(json.success){
          localStorage.setItem("authToken",json.authToken);
          navigate("/");
        }
        else {
          alert("Enter Valid Credentials");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })     
    }
  return (
    <section className="bg-gradient-to-r from-custom-dark to-custom-gray min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-4xl font-semibold text-white font-briem dark:text-white">
          FoodWeb    
        </a>
        <div className="w-full bg-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-montserrat font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
              Login to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={credentials.email} onChange={onChange} required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                <input type="password" name="password" id="password"  value={credentials.password} onChange={onChange}placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <button type="submit" style={{"font-family":"'Belanosima', sans-serif",backgroundColor:"#F2BE22"}}className="w-full text-black bg-black-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              <p className=" font-light text-white font-montserrat text-xl dark:text-gray-400">
                Don’t have an account yet? <a href="/createuser" className="font-medium text-primary-600 hover:underline  hover:text-cyan-500">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login

import React, { useContext } from "react";
import LoginAnimation from "../assets/lottie/Animation2.json"
import Lottie from "react-lottie-player";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const{signIn,setUser,googleSignIn}=useContext(AuthContext)
  const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const handleGoogleSignIn=async()=>{
        try{
          const result=await googleSignIn()
          const user=result.user
          setUser(user)
        }
        catch(err){
          toast.error(err?.message)
        }
      }
    
      const onSubmit = (data) => {
        signIn(data.email,data.password)
        .then(result=>{
          const user=result.user
          console.log(user)
          setTimeout(()=>{
            navigate('/')
          },1000)
          toast.success("Login Successful")
        })
      }
  return (
    <div className='flex md:flex-row flex-col justify-center md:pt-20 pt-6 '>
         <div className="flex justify-center">
             <Lottie loop animationData={LoginAnimation} play className='md:h-[400px] md:w-[400px] h-[200px] w-[200px]' />
                
        </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl justify-center mx-auto md:mx-0">
       <h1 className="text-4xl font-bold text-center pt-5">Login</h1>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            {...register("email")}
              type="email"
              placeholder="email"
              className="input input-bordered rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="password"
              className="input input-bordered rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent w-full">Login</button>
          </div>
          <p className="text-center pt-3 mb-3"><small>Don't have an account</small><Link className="text-red-500 ml-1" to='/register'>Register now</Link></p>
          <div className="divider">OR</div>
          <button type="button" onClick={handleGoogleSignIn}  className="btn btn-outline btn-accent "><FaGoogle size={20}/></button>
        </form>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default Login;

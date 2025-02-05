import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import RegisterAnimation from '../assets/lottie/Animation1.json'
import Lottie from 'react-lottie-player';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className='flex md:flex-row flex-col justify-center md:pt-20 pt-6'>
             <div className='flex justify-center'>
                <Lottie loop animationData={RegisterAnimation} play className='md:h-[500px] md:w-[400px] h-[200px] w-[200px]' />
                </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto md:mx-0">
               
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
            <h1 className='text-4xl font-bold text-center pb-5'>Register Now</h1>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name")} type="text" placeholder="Your Name" className="
          input input-bordered rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input {...register("photo")} type="text" placeholder="Photo URL" className="input input-bordered rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email")} type="email" placeholder="email" className="input input-bordered rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password")} type="password" placeholder="password" className="input input-bordered rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-error w-full">Register</button>
        </div>
        <div>
        <p className="text-center pt-3 mb-3"><small>Already have an account</small><Link className="text-blue-500 ml-1" to='/login'>Login now</Link></p>
        <div className="divider">OR</div>
        </div>
        <div>
            <button className='btn btn-outline btn-error w-full'><FaGoogle></FaGoogle></button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Register;
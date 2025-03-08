import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
const SignUp = () => {
    return (
        <div className='lg:w-2/4 md:px-5 pb-3.5 p-4 max-w-screen-2x1 mx-auto animate__animated animate__zoomIn'>
            <div className='bg-white px-10 py-1 rounded-3xl border-2 border-gray mt-10'>
                <h1 className='text-2xl font-bold pt-8'>Welcome To Thee Castable</h1>
                <p className='font-medium text-gray-500 text-base  mt-4'>Sign in or create an account. It's free!</p>
                <div className='mt-8'>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <ul>
                            <li className='flex rounded-xl py-2 border-2 item-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all text-base'>                        <FcGoogle className='mt-1 ' /><button ><a href=''>Sign in with Google</a></button>

                            </li><br></br>
                            <li className='flex rounded-xl py-2 border-2 item-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all text-base'>                        <IoLogoApple className='mt-1 ' /><button >Sign in with Apple</button>

                            </li><br></br>
                            <li className='flex rounded-xl py-2 border-2 item-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all text-base'>                        <CiFacebook className='mt-1 ml-4 ' /><button >Sign in with facebook</button>

                            </li><br></br>
                            <hr className='border-slate-400'></hr><br></br>
                            <li className='flex rounded-xl py-2 border-2 item-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all text-base'>                        <MdOutlineMarkEmailRead className='mt-1 ' /><button >Continue To Email</button>
                            </li><br></br>
                        </ul>
                    </div>

                    <div className='mt-8 flex justify-center items-center'>
                        <p className='text-sm font-sans mb-5 underline-offset-1'>By signing up, you agree to the <a href='' className='underline underline-offset-1'>Terms and Conditions</a> and <a href="" className='underline underline-offset-1'>Privacy Policy</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp

import React from 'react'
import lib from"../../lib/lib";
const SignUP = () => {
    const data = lib.signUpdata();
    return (
    <div>
        <div className='bg-mainBgColor flex items-center justify-between'>
            <div className="w-1/2 h-screen flex justify-center items-center">
            <div>
                <h1>Get started with easily register</h1>
                <p>Free register and you can enjoy it</p>
                <form action="#" className='mt-10'>
                    {data?.map((item)=> (
                        <div className='flex flex-col gap-y-1 items-start'>
                        <label htmlFor="email">{`Fail Up The ${item.name} *`}</label>
                        <input type="email"
                         placeholder='example@gmail.com'
                         name ="email"
                         className="border border-gray-500 py-1 px-2"
                         />
                    </div> 
                    ))}
                    
                </form>
            </div>
            </div>
            <div className="w-1/2 bg-yellow-500 h-screen">two</div>
        </div>
    </div>
  )
}

export default SignUP
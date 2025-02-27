import React from 'react'

const SignUP = () => {
  return (
    <div>
        <div className='bg-mainBgColor flex items-center justify-between'>
            <div className="w-1/2 h-screen flex justify-center items-center">
            <div>
                <h1>Get started with easily register</h1>
                <p>Free register and you can enjoy it</p>
                <form action="#">
                    <div className='flex flex-col gap-y-1 items-start'>
                        <label htmlFor="email">email</label>
                        <input type="email"
                         placeholder='example@gmail.com'
                         name ="email"
                         className="borde border-gray-500 py-1 px-2"
                         />
                    </div>
                </form>
            </div>
            </div>
            <div className="w-1/2 bg-yellow-500 h-svh">two</div>
        </div>
    </div>
  )
}

export default SignUP
import React from 'react';
import lib from "../../lib/lib";

const SignUP = () => {
    const data = lib.signUpdata();
    let email = "";
    // handleinput function implement
    const handleinput = (e) =>{
        if (e.target.value); {
        }
    }
    console.log(email);
    
    return (
        <div>
            <div className='bg-mainBgColor flex items-center justify-between'>
                <div className="w-1/2 h-screen flex justify-center items-center">
                    <div>
                        <h1>Get started with easily register</h1>
                        <p>Free register and you can enjoy it</p>
                        <form action="#" className='mt-10' onSubmit={(e) => e.preventDefault}>
                            {data?.map(({name, id, required}, index) => (
                                <div key={id} className='flex flex-col gap-y-1 items-start mb-5'>
                                    <label htmlFor={name}>
                                        {`Fill Up The ${name} `}
                                        {required && <span className='text-red-500'>*</span>}
                                    </label>
                                    <input
                                        type={name === "email"
                                             ? "email" 
                                             : name === "password" 
                                             ? "password" 
                                             : "text"} 
                                        placeholder={`Enter your ${name}`}
                                        name={name}
                                        className="border border-gray-500 py-1 px-2"
                                        onChange={handleinput}
                                    />
                                </div>
                            ))}
                            <button className='px-17 py-2 bg-mainColor text-white text-lg rounded-3xl cursor-pointer'>SignUP</button>
                        </form>
                        <p className='mt-5'>Already  have an account ? <span>Sign In</span></p>
                    </div>
                </div>
                <div className="w-1/2 bg-yellow-500 h-screen">two</div>
            </div>
        </div>
    );
}

export default SignUP;

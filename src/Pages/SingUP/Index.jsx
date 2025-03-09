import React, { useState } from 'react';
import lib from "../../lib/lib";

const SignUP = () => {
    const data = lib.signUpdata();
    const [email, setEmail] = useState("");
    const [fullName,setFullName] = useState("");
    const [password,setPassword] = useState("");

    // handleinput function
    const handleinput = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
    };

    const handleplus = () => {
        setCount(count + 1);
    };

    const handleminus = () => {
        setCount(count > 1 ? count - 1 : 1);
    };

    return (
        <div>
            <div className='bg-mainBgColor flex items-center justify-between'>
                <div className="w-1/2 h-screen flex justify-center items-center">
                    <div>
                        <h1>Get started with easily register</h1>
                        <p>Free register and you can enjoy it</p>
                        <form action="#" className='mt-10' onSubmit={(e) => e.preventDefault()}>
                            {data?.map(({ name, id, required }) => (
                                <div key={id} className='flex flex-col gap-y-1 items-start mb-5'>
                                    <label htmlFor={name}>
                                        {`Fill Up The ${name} `}
                                        {required && <span className='text-red-500'>*</span>}
                                    </label>
                                    <input
                                        type={name === "email" ? "email" : name === "password" ? "password" : "text"}
                                        placeholder={`Enter your ${name}`}
                                        name={name}
                                        className="border border-gray-500 py-1 px-2"
                                        onChange={handleinput}
                                    />
                                </div>
                            ))}
                            <button className='px-7 py-2 bg-mainColor text-white text-lg rounded-3xl cursor-pointer'>SignUP</button>
                        </form>
                        <p className='mt-5'>Already have an account? <span className="text-blue-500 cursor-pointer">Sign In</span></p>
                    </div>
                </div>
                <div className="w-1/2 bg-yellow-500 h-screen flex flex-col justify-center items-center">
                  
                </div>
            </div>
        </div>
    );
};

export default SignUP;

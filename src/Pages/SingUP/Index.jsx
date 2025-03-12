import React, { useState } from "react";
import lib from "../../lib/lib";

const SignUP = () => {
    const data = lib.signUpdata();
    // useState দিয়ে আলাদা আলাদা state
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");

    //error state
    const [emailError,setEmaillError] = useState("");
    const [fullNameError,setFullNameError] = useState("");
    const [passwordError,setPasswordError ] = useState("");


    // handleChange function
    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "email") {
            setEmail(value);
        } else if (name === "fullName") {
            setFullName(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    /** 
     *  todo : handleSignUp funtion implement
     ** motive :
     * params :()
     * return null
     */

     const handleSignUp = () =>{
        alert("sing up");
        if(!fullName){
            setFullNameError ("Fullname Missing");
        }
        else if (!email){
            setEmaillError("Missing Email !");
        }
        else if (!password){
            setPasswordError ("password Missng !");
        } else{
            alert ("fine");
        }
     };

    return (
        <div>
            <div className="bg-mainBgColor flex items-center justify-between">
                <div className="w-1/2 h-screen flex justify-center items-center">
                    <div>
                        <h1>Get started with easily register</h1>
                        <p>Free register and you can enjoy it</p>
                        <form action="#" className="mt-10" onSubmit={(e) => e.preventDefault()}>
                            {data?.map(({ name, id, required }) => (
                                <div key={id} className="flex flex-col gap-y-1 items-start mb-5">
                                    <label htmlFor={name}>
                                        {`Fill Up The ${name} `}
                                        {required && <span className="text-red-500">*</span>}
                                    </label>
                                    <input
                                        type={name === "email" ? "email" : name === "password" ? "password" : "text"}
                                        placeholder={`Enter your ${name}`}
                                        name={name}
                                        value={name === "email" ? email : name === "fullName" ? fullName : password}
                                        onChange={handleChange}
                                        className="border border-gray-500 py-1 px-2"
                                    />
                                </div>
                            ))}
                            <button onClick={handleSignUp} className="px-7 py-2 bg-mainColor text-white text-lg rounded-3xl cursor-pointer">
                                Sign Up
                            </button>
                        </form>
                        <p className="mt-5">
                            Already have an account? <span className="text-blue-500 cursor-pointer">Sign In</span>
                        </p>
                    </div>
                </div>
                <div className="w-1/2 bg-yellow-500 h-screen flex flex-col justify-center items-center"></div>
            </div>
        </div>
    );
};

export default SignUP;

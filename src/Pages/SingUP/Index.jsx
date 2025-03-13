import React, { useState } from "react";
import lib from "../../lib/lib";

const SignUP = () => {
    const data = lib.signUpdata();
    
    // State
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");

    // Error State
    const [emailError, setEmailError] = useState("");
    const [fullNameError, setFullNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Handle Input Change
    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "email") {
            setEmail(value);
            setEmailError("");
        } else if (name === "fullName") {
            setFullName(value);
            setFullNameError("");
        } else if (name === "password") {
            setPassword(value);
            setPasswordError("");
        }
    };

    // Handle Sign Up
    const handleSignUp = () => {
        let isValid = true;
        
        if (!fullName) {
            setFullNameError("Full Name is required");
            isValid = false;
        }
        if (!email) {
            setEmailError("Email is required");
            isValid = false;
        }
        if (!password) {
            setPasswordError("Password is required");
            isValid = false;
        }

        if (isValid) {
            alert("Sign Up Successful");
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
                                    {name === "email" && emailError && <span className="text-red-500">{emailError}</span>}
                                    {name === "fullName" && fullNameError && <span className="text-red-500">{fullNameError}</span>}
                                    {name === "password" && passwordError && <span className="text-red-500">{passwordError}</span>}
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

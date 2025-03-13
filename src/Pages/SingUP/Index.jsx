import React, { useState } from "react";
import lib from "../../lib/lib";

const SignUP = () => {
    const data = lib.signUpdata();
    // useState দিয়ে আলাদা আলাদা state
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");

    //error state
    const [emailError, setEmailError] = useState("");  // Corrected spelling mistake
    const [fullNameError, setFullNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // handleChange function
    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "email") {
            setEmail(value);
        } else if (name === "fullname") {
            setFullName(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleSignUp = () => {
        alert("sign up");
        if (!fullName) {
            setFullNameError("Full name missing");
        } else if (!email) {
            setEmailError("Missing Email!"); // Corrected spelling mistake
        } else if (!password) {
            setPasswordError("Password missing!");
        } else {
            alert("Fine");
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
                                        {`Fill Up The ${name}`}
                                        {required && <span className="text-red-500">*</span>}
                                    </label>
                                    <input
                                        type={name === "email" ? "email" : name === "password" ? "password" : "text"}
                                        placeholder={`Enter your ${name}`}
                                        name={name}
                                        value={name === "email" ? email : name === "fullname" ? fullName : password}
                                        onChange={handleChange}
                                        className="border border-gray-500 py-1 px-2"
                                    />
                                    { email== "email" && name == "email" ? (
                                        <span className="text-red-500">{emailError}</span>  // Corrected error display
                                    ) :fullName == "" && name =="fullName" ?(
                                        <span className="text-red-500">{fullNameError}</span>
                                    ) : password == "" && name == "password" ?(
                                        <span className="text-red-500">{passwordError}</span>
                                    ) :(
                                        ""
                                    )}
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

import React, { useState } from "react"; 
import lib from "../../lib/lib";
import img from "../../assets/this.jpg";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const SignUP = () => {
  const auth =getAuth();
  const data = lib.signUpdata();
  // useState দিয়ে আলাদা আলাদা state
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  //error state
  const [emailError, setEmailError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [eye,seteye] = useState(false);

  //handleSignUp function
  const handleSignUp = () => {
    if (!email) {
        setEmailError("Email Missing");
    } else if (!fullName) {
        setEmailError("")
        setFullName("fullname Missing !");
    } else if (!password) {
        setEmailError("");
        setFullNameError("");
        setPasswordError("password Missing !");
    } else {
      setEmailError("");
      setFullNameError("");
        setPasswordError("")
      console.log(email,fullName,password);
      createUserWithEmailAndPassword(auth, email, password).then((userinfo) =>{
        console.log("user Created sucessfull",userinfo);
      }).catch((err) =>{
        console.log(`error from createUserWithEmailAndPassword function ${err}`);
      });

      
    }
  };

  // handleChange function

  const handlepasswword = (event) => {
    setPassword(event.target.value);
  };

  const handleFullname = (event) => {
    setFullName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  // handleEye
  const handleEye = () =>{
    seteye(! eye);
  }

  console.log(passwordError, fullNameError, emailError);

  return (
    <div>
      <div
        className="bg-mainBgColor flex items-center justify-between w-screen h-screen overflow-hidden"
      >
        <div className="w-1/2 h-screen flex justify-center items-center">
          <div>
            <h1>Get started with easily register</h1>
            <p>Free register and you can enjoy it</p>
            <form
              action="#"
              className="mt-10"
              onSubmit={(e) => e.preventDefault()}
            >
                <div className="flex flex-col gap-y-1 items-start mb-5">
                  <label htmlFor="email">
                    {`Fill Up The email`}
                     {<span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={"email"}
                    placeholder={"email"}
                    name={"email"}
                    value={email}
                    onChange={handleEmail}
                    className="border border-gray-500 py-1 px-2"
                  />
                {emailError &&(
                    <span className="text-red-500">{emailError}</span>
                )}
                </div>

                <div className="flex flex-col gap-y-1 items-start mb-5">
                  <label htmlFor="email">
                    {`Fill Up The FullName`}
                     {<span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={"text"}
                    placeholder={"fullName"}
                    name={"fullName"}
                    value={fullName}
                    onChange={handleFullname}
                    className="border border-gray-500 py-1 px-2"
                  />
                  {fullNameError &&(
                    <span className="text-red-500">{fullNameError}</span>
                )}
                </div>

                <div className="flex flex-col gap-y-1 items-start mb-5 relative">
                  <label htmlFor="email">
                    {`Fill Up The email`}
                     {<span className="text-red-500">*</span>}
                  </label>
                  <input
                    type= {eye ?"text":"password"}
                    placeholder={"password"}
                    name={"email"}
                    value={password}
                    onChange={handlepasswword}
                    className="border border-gray-500 py-1 px-2"
                  />
                  <span className="absolute right-[20%] top-[60%] cursor-pointer" onClick={handleEye}>
                    {eye ? <FaRegEye /> : <FaEyeSlash />}
                  
                  </span>
                  {passwordError &&(
                    <span className="text-red-500">{passwordError}</span>
                )}
                </div>
              <button 
              onClick={handleSignUp}
                className="px-7 py-2 bg-mainColor text-white text-lg rounded-3xl cursor-pointer"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-5">
              Already have an account?{" "}
              <span className="text-blue-500 cursor-pointer">Sign In</span>
            </p>
          </div>
        </div>
        <div className="w-1/2 bg-yellow-500 h-screen flex flex-col justify-center items-center ">
          <picture>
            <img
              className="w-full h-full object-cover"
              src={img}
              alt=""
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
import { useState } from "react";
import Navbar from "../components/Navbar";
import '../App.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {

    const navigate = useNavigate()

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPass,setConfirmPass] = useState("")


    const changeUsername = (e) => {
        setUsername(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const changeConfirmPass = (e) => {
        setConfirmPass(e.target.value)
    }

    const handleSubmit = async () => {

        if(password !== confirmPass) {
            alert('Password tidak sama')
            return;
        }

        const payload ={
            username:username,
            password:password
        }

        try {
            const res = await axios.post("https://reqres.in/api/register",payload,{
            headers: {
                "Content-Type": "application/json",
                "x-api-key" : "reqres-free-v1"
                }
            })
            console.log(res);
            console.log("akun telah berhasil dibuat");
            alert("akun telah berhasil dibuat")
            navigate("/login")
        } catch (err) {
            console.error(err)
            console.log(err.response.data.error);
            alert(err.response.data.error)
        }

    }

    return(
        <div className="bg-[url(/img/background.jpg)] w-screen h-screen bg-no-repeat bg-cover overflow-hidden">
            <Navbar className='text-white'/>
            <div className={`flex justify-center items-center h-screen flex-col`}>
                <div className="h-[600px] w-[500px] bg-transparent border-white border-2 backdrop-blur rounded-4xl">
                    
                    <h1 className="text-[#172838] text-4xl text-center mt-[75px] font-bold"> Register </h1>
                    <form>
                        <input onChange={changeUsername} autoComplete="email" type="email" placeholder="Email" className="mt-20 ml-10 border-b-3 w-[370px] h-[50px] text-xl pl-3 placeholder:text-[#172838]"/> <ion-icon name="mail"></ion-icon>
                        <input onChange={changePassword} autoComplete="current-password" type="password" placeholder="Password" className="mt-10 ml-10 border-b-3 w-[370px] h-[50px] text-xl pl-3 placeholder:text-[#172838]"/> <ion-icon name="lock-closed"></ion-icon>
                        <input onChange={changeConfirmPass} autoComplete="current-password" type="password" placeholder="Confirm Password" className="mt-10 ml-10 border-b-3 w-[370px] h-[50px] text-xl pl-3 placeholder:text-black"/> <ion-icon name="lock-closed"></ion-icon>
                    </form>
                    <div className="ml-10 mr-12 flex justify-between text-xl mt-5 items-center h-[30px]">
                        <span><input type="checkbox" className="w-[18px] h-[20px] mr-1.5"/>Remember me</span> <span>Forgot Password?</span>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="flex bg-[#172838] text-white rounded-lg px-[180px] py-[10px] mx-auto cursor-pointer mt-5 text-xl font-semibold">Register</button>
                    
                </div>
            </div>

            
            
        </div>
            
    )
}

export default Register
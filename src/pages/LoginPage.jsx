import { useState } from "react";
import Navbar from "../components/Navbar";
import '../App.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

    const navigate = useNavigate()
    const [isShow,setIsShow] = useState(false)

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleShow = () => {
        setIsShow(!isShow)
    }

    const changeUsername = (e) => {
        setUsername(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async () => {
        const payload ={
            username:username,
            password:password
        }

        try {
            const res = await axios.post("https://reqres.in/api/login",payload,{
            headers: {
                "Content-Type": "application/json",
                "x-api-key" : "reqres-free-v1"
                }
            })
            console.log(res);
            const token = res.data.token
            localStorage.setItem("token",token)
            console.log("Token berhasil Disimpan",token);
            navigate("/")
        } catch (err) {
            console.log(err);
            console.log(err.response.data);
            alert(err.response.data.error); 
        }

    }

    return(
        <div className="bg-[url(/img/background.jpg)] w-screen h-screen bg-no-repeat bg-cover overflow-hidden">
            <Navbar className='text-white'/>
            <div className={isShow? `flex justify-center items-center h-screen flex-col` : 'hidden'}>
                <div className=" lg:h-[600px] lg:w-[500px] bg-transparent border-white border-2 backdrop-blur rounded-4xl sm:mx-3 lg:mx-0">
                    <button onClick={handleShow} className="text-4xl absolute right-0 text-white bg-[#172838] w-[55px] h-[55px] rounded-tr-4xl rounded-bl-xl hover:bg-white hover:text-[#172838] cursor-pointer">x</button>
                    <h1 className="text-[#172838] text-4xl text-center mt-[75px] font-bold"> Login </h1>
                    <form>
                        <input onChange={changeUsername} autoComplete="email" type="email" placeholder="Email" className="mt-20 ml-10 border-b-3 w-[370px] h-[50px] text-xl pl-3 placeholder:text-[#172838]"/> <ion-icon name="mail"></ion-icon>
                        <input onChange={changePassword} autoComplete="current-password" type="password" placeholder="Password" className="mt-10 ml-10 border-b-3 w-[370px] h-[50px] text-xl pl-3 placeholder:text-[#172838]"/> <ion-icon name="lock-closed"></ion-icon>
                    </form>
                    <div className="ml-10 mr-12 flex justify-between text-xl mt-5 items-center h-[30px]">
                        <span><input type="checkbox" className="w-[18px] h-[20px] mr-1.5"/>Remember me</span> <span>Forgot Password?</span>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="flex bg-[#172838] text-white rounded-lg px-[180px] py-[10px] mx-auto cursor-pointer mt-5 text-xl font-semibold">Login</button>
                    <div className="flex justify-center sm:mb-5 mt-8 text-xl gap-1">
                        <p>Don't have account?</p> <Link to='/register'><span className="font-bold">Register</span></Link>
                    </div>
                </div>
            </div>

            <div className={isShow? `hidden` : `absolute lg:top-[25vh] lg:left-[20vh] left-[10vh] top-[35vh] z-0`}>
                <h1 className="text-6xl text-white">Welcome back</h1>
                <button onClick={handleShow} className={`btn btn-primary hover:bg-[#172838] hover:text-white text-[#172838] bg-white absolute w-[300px] h-[50px] mt-4.5`}>Ayo Silakan Login</button>
            </div>
            
        </div>
            
    )
}

export default LoginPage
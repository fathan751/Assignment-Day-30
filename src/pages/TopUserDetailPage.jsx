import Navbar from "../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const TopUserDetailPage = () => {
    const {id} = useParams()

    const [users, setUsers] = useState({})

    const fetchUsers = async () => {
        try{
            const res = await axios.get(`https://reqres.in/api/users/${id}`,{
            headers: {
          "Content-Type": "application/json",
          "x-api-key" : "reqres-free-v1"
        }
            })
            console.log(res);
            setUsers(res.data.data)
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUsers()
    },[])

    return(
        <div>
            <Navbar/>
            <h1 className="text-center font-bold text-4xl mt-10">Top User</h1>
            <Link to='/' className="absolute right-10">
                <button className="btn btn-primary w-[100px]">Back</button>
            </Link>
            <div className="ml-20 mt-20 flex lg:flex-row flex-col h-fit items-center border-2 gap-10 w-fit">
                <img src={users?.avatar} alt="logo" className="border-r-2 lg:w-fit"></img>
                <p className="text-xl lg:border-r-2 sm:border-b-2 lg:border-b-0 border-t-2 lg:border-t-0 w-full lg:w-fit h-[128px] justify-center items-center flex pr-5">user id = {id}</p>
                <p className="text-xl lg:border-r-2 sm:border-b-2 lg:border-b-0 w-full lg:w-fit h-[128px] justify-center items-center flex pr-5">Nama Depan : {users.first_name} </p>
                <p className="text-xl lg:border-r-2 sm:border-b-2 lg:border-b-0 w-full lg:w-fit h-[128px] justify-center items-center flex pr-5">Nama Belakang : {users.last_name} </p>
                <p className="text-xl lg:border-r-2 sm:border-b-2 lg:border-b-0 w-full lg:w-fit h-[128px] justify-center items-center flex pr-5">email : {users.email}</p>
            </div>
            
        </div>
    )
}

export default TopUserDetailPage
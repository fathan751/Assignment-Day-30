import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDetailPage = () => {

  const {id} = useParams()

  const [users,setUsers] = useState({})

  const fetchDetailUser = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${id}`,{
        headers: {
          "Content-Type": "application/json",
          "x-api-key" : "reqres-free-v1"
        }
      })
      // console.log(res);
      setUsers(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDetailUser()
  },[])

  return(
    <div className="w-[100%]">
        <Navbar/>
        <h1 className="text-center font-bold text-4xl mt-10">User Info</h1>
        <div className="flex flex-col items-center mt-10 gap-6">
          <img alt="logo" src={users?.avatar} className="rounded-full w-[15em]"></img>
          <p className="text-[24px]">ID : {id}</p>
          <p className="text-[24px]">Name : {users.first_name} {users.last_name}</p>
          <p className="text-[24px]">email : {users.email}</p>
          <Link to="/">
          <button className="btn btn-primary">back</button>
          </Link>
        </div>
    </div>
  )
};

export default UserDetailPage;

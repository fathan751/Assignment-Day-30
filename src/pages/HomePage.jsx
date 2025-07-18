import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [listUsers, setListUsers] = useState([]);
  const [users, setUsers] = useState({});

  const fetchListUsers = async () => {
    try {
      const res = await axios.get("https://reqres.in/api/users?page=2",{
        headers: {
          "Content-Type": "application/json",
          "x-api-key" : "reqres-free-v1"
        }
      });
      console.log(res);
      setListUsers(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://reqres.in/api/users/2");
      console.log(res);
      setUsers(res.data.data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchListUsers(), fetchUsers();
  }, []);

  return (
    <div className="w-[100%]">
        <Navbar />

        <div className="ml-[100px]">
          <h1 className="text-5xl font-bold text-center mt-[20px]">List Users</h1>
          <div>
            <h2 className="font-bold text-3xl">Top User</h2>
            <div className="mt-[25px] flex border-y-1 py-[10px] justify-between px-10">
            <p className="items-center flex font-semibold">1. Name: {users.first_name} {users.last_name}</p>
            <Link to={`/top-user-detail/${users?.id}`}>
            <button className="btn btn-primary ml-[50px]">Detail</button>
            </Link>
            </div>
          </div>

          <div className=" mt-10">
            <h2 className="font-bold text-3xl mb-8">All User</h2>
            {listUsers.map((user,key) => (
            <div className=" flex border-t-1 py-[10px] justify-between px-10">
              <p className="items-center flex font-semibold">{key+1}. Name: {user.first_name} </p>
              <Link to={`/user-detail/${user?.id}`}>
              <button className="btn btn-primary ml-[50px]">Detail</button>
              </Link>
            </div>
            ))}
            
          </div>
          
        </div>
    </div>
  );
};

export default HomePage;

import { useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const {className} = props

    const [transform, setTransform] = useState(false)

    const handleTransform = () => {
        setTransform(!transform)
    }

   const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    const token = localStorage.getItem("token")
    return (


    <div>
        {/* // Mobile */}
        <div>

            <div className={`lg:hidden flex ${className} w-screen sm:w-full h-20 bg-[#172838] items-center justify-between relative z-20`}>
                <Link to='/' className="font-bold text-3xl">
                    <h1 className="ml-5 text-white">Logo</h1>
                </Link>

                <div className="mr-5 flex flex-col gap-2">
                    <span className={transform?'origin-left rotate-48 transition duration-300 w-8 h-1 bg-white':`origin-left transition duration-300 -rotate-0 w-8 h-1 bg-white`}></span>
                    <span className={transform?'transform scale-0 transition duration-300 w-8 h-1 bg-white':`transform scale-100 transition duration-300 w-8 h-1 bg-white`}></span>
                    <span className={transform?'origin-left -rotate-48 transition duration-300 w-8 h-1 bg-white':`origin-left transition duration-300 -rotate-0 w-8 h-1 bg-white`}></span>
                    <button onClick={handleTransform} className="absolute bg-transparent w-9 h-7"></button>
                </div>

            </div>

            <div className={transform?"bg-[#172838] w-[300px] h-[100vh] fixed right-0 z-50" :'hidden'}>
                <div className="text-white text-xl pl-5 flex flex-col gap-10">
                    <Link to='/'>
                    <p className=" py-[10px]">Home</p>
                    </Link>
                    <Link to='/about'>
                        <p className=" py-[10px]">About</p>
                    </Link>
                    <Link to='/services'>
                        <p className=" py-[10px]">Services</p>
                    </Link>
                    <Link to='/contact'>
                        <p className=" py-[10px]">Contact</p>
                    </Link>
                    <Link to='/login'>
                        <p className={token?`hidden`:' py-[10px] '}>Login</p>
                    </Link>
                <button onClick={handleLogout} className={token?'border-2 px-[25px] py-[10px] hover:cursor-pointer':'hidden'}>Logout</button>

                </div>
            </div>

        </div>

            


        {/* // Dekstop/laptop */}
            <div className={`hidden lg:flex px-20 h-[70px]  items-center ${className}`}>

            <Link to='/' className="font-bold text-3xl lg:mr-[30%] 2xl:mr-[50%]">
                <h1 className="hover:text-4xl">Logo</h1>
            </Link>
            <div className="flex gap-[100px] font-bold text-[18px]  items-center">
                <Link to='/'>
                    <p className="hover:text-xl">Home</p>
                </Link>
                <Link to='/about'>
                    <p className="hover:text-xl">About</p>
                </Link>
                <Link to='/services'>
                    <p className="hover:text-xl">Services</p>
                </Link>
                <Link to='/contact'>
                    <p className="hover:text-xl">Contact</p>
                </Link>
                <Link to='/login'>
                    <p className={token?`hidden`:'border-2 px-[25px] py-[10px] hover:text-xl'}>Login</p>
                </Link>
                <button onClick={handleLogout} className={token?'border-2 px-[25px] py-[10px] hover:cursor-pointer':'hidden'}>Logout</button>
            </div>
        </div>

    </div>
    )
}

export default Navbar
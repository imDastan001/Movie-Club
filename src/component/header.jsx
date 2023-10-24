import Logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const header= (signin)=>{
const token = localStorage.getItem('token');
const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/');
}

    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
          navigate('/browse');
        } else {
            navigate('/');
        }
      }, []);
return(
<>

<div className="flex justify-between absolute z-10 bg-gradient-to-b from-black w-screen">
<img className="w-60 mt-3" src={Logo} alt="MovieClub logo" />
{token&&<button onClick={handleLogout} className="text-white font-bold mr-9 bg-red-600 px-8 py-2 my-3 rounded-md hover:bg-red-800">Sign Out</button>}
</div>


</>

    )


}
export default header;
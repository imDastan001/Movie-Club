import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const header= ()=>{
const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/');
}

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          navigate('/browse');
        } else {
            navigate('/');
        }
      }, []);
return(
<>
<h1>header</h1>
<button onClick={handleLogout}>Signout</button>


</>

    )


}
export default header;
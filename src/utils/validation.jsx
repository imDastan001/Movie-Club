export const validcheck = (email , password, IsSignin,Username)=>{
const regexMail=/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    if(!IsSignin && Username.length===0){
        return "Username field is empty";
    }
if(!regexMail) return "Email is not valid";
if(!regexPassword) return "Password is not valid";

return null;

}


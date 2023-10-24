export const validcheck = (email , password)=>{
const regexMail=/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
if(!regexMail) return "Email is not valid";
if(!regexPassword) return "Password is not valid";

return null;

}


import { useState } from "react";

const StateForm = () => {
    const [email,setEmail] = useState(null)
    const[password,setpassword] = useState(null)
    const [error,setError]= useState('')

    const handelSubmit = e => {
        e.preventDefault();
 
        if(password.length < 6 ){
            setError('password should be at least 6 characters or longer')
        }
        else{
            setError('')
            console.log(email,password)
        }
       
    }

    const handelEmailChange = e =>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handelPasswordChange = e =>{
        setpassword(e.target.value)    
    }
  
    return (
        <div>
              <form onSubmit={handelSubmit}>
                <input type="text" name="name" placeholder="your name"/><br /><br />
                <input onChange={handelEmailChange} placeholder="enter your email" type="email" name="email" /><br /><br />
                <input onChange={handelPasswordChange} placeholder="enter your password" type="password" name="password" required /><br /><br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateForm;
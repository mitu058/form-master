import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const PassRef = useRef(null)

useEffect(()=>{
nameRef.current.focus()
emailRef.current.focus()
},[])

  const handelSubmit = e =>{
    e.preventDefault()
    console.log(nameRef.current.value)
    console.log(emailRef.current.value)
    console.log(PassRef.current.value)

  }
    return (
        <div>
                  <form onSubmit={handelSubmit}>
                <input ref={nameRef} type="text" name="name" /><br /><br />
                <input ref={emailRef} defaultValue={"rafisojoni@gmail.com"} type="email" name="email" /><br /><br />
                <input ref={PassRef} type="password" name="password" required/><br /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;
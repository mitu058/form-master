import useInputChange from "./useInputState";

const HookForm = () => {
    // const [name, handelNameChange] = useInputChange('rohini hooked')
    const emailState = useInputChange('rohini@sojoni.com')
    const handelSubmit = e =>{
        // console.log('data from',name)
        console.log('data form', emailState.value)
        e.preventDefault()
    }
    return (
        <div>
              <form onSubmit={handelSubmit}>
                {/* <input value={name} onChange={handelNameChange} type="text" name="name" /><br /><br /> */}
                <input {...emailState} type="email" name="email" /><br /><br />
                <input type="password" name="password" /><br /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;
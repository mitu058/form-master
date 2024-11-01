import { useState } from "react"

const useInputChange = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue)

    // const handelChange = e =>{
    //     setValue(e.target.value)
    // }
    // return[value,handelChange]

    const onChange = e =>{
        setValue(e.target.value)
    } 
    return{
        value,
        onChange
    }

}
export default useInputChange
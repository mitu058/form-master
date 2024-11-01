
import './App.css'
import ReuseableFrom from './components/ReuseableFrom'
// import HookForm from './components/Hooks/HookForm'
// import RefForm from './components/RefForm'
// import StateForm from './components/StateForm'
// import SimpleForm from './components/SimpleForm'

function App() {
  const handelSignUpSubmit = data =>{
  console.log('sign up data',data)
  }
  const handelUpdateProfile = data =>{
   console.log('update profile data',data)
  }
  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
     {/* <StateForm></StateForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}
     <ReuseableFrom formTitle={'sing up'} submitBtntext={'Submit'} handelSubmit={handelSignUpSubmit}>
      <div>
        <p>Sign up right now</p>
      </div>
     </ReuseableFrom>
     <ReuseableFrom formTitle={'Update profile'} submitBtntext={'Update'} handelSubmit={handelUpdateProfile}>
     <div>
        <p>Always keep your profile update</p>
      </div>
     </ReuseableFrom>
    </>
  )
}

export default App

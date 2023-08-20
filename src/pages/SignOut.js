import React, {useState} from 'react'
import '../components/signin.css'
import { database } from '../Firebase.config'
import {signInWithEmailAndPassword ,createUserWithEmailAndPassword, signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../redux/wizzyCartSlice'
import { useDispatch } from 'react-redux'
import {ToastContainer, toast} from 'react-toastify'



const SignOut = () => {

  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [logged, setLogged] =useState(false)

  console.log(logged)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e)=>{
    e.preventDefault()
    setEmailValue(e.target.value)
  }

  const handleSignOut = ()=>{
    signOut(database).then(()=> {toast.success('Logged Out Successfully')
    dispatch(removeUser())
    setLogged(false)

    setTimeout(()=> {navigate('/')}, 1500)
  }).catch((error)=> console.log(error))
  }

  const handleSUbmit = (e, type)=> {
    e.preventDefault()
    const email = emailValue
    const password = passwordValue 

    if(type === 'signup'){
      createUserWithEmailAndPassword(database, email, password).then(data =>{
        console.log(data,'authData')
        const user =  data.user;
        dispatch(addUser(
          {
            _id: user.uid,
            email: user.email
          }
        ))
        setLogged(true)
        // setTimeout(()=> navigate('/'), 1500)
      }).catch((error)=> alert(error.code))
    } else{
      signInWithEmailAndPassword(database, email, password).then(data =>{
        console.log(data,'authData')
        const user =  data.user;
        dispatch(addUser(
          {
            _id: user.uid,
            email: user.email
          }
        ))
        setLogged(true)
        setTimeout(()=> navigate('/'), 1500)
      }).catch((error)=> alert(error.code))
    }
    

    setEmailValue('')
    setPasswordValue('')
  }

  const handlePasswordChange = (e)=>{
    e.preventDefault()
    setPasswordValue(e.target.value)
  }


  return (
    <div className='sign-up'>
      <div className='sign-up-container'>
        <h2>{!logged ? 'Sign Up' : 'Sign In'}</h2>
        <form onSubmit={(e)=> handleSUbmit(e, logged ? 'Signin' : 'signup')}>
          <div className='form'>
            <label>Email:</label>
            <input type='email' name='email'  value={emailValue} onChange={handleChange}/>
          </div>
          <div className='form'>
            <label>Password:</label>
            <input type='password' name='password' value={passwordValue} onChange={handlePasswordChange} />
          </div>
          <button>Submit</button>
        </form>
      </div>
      
      <div className='sign-out'>
        <button onClick={handleSignOut}>Sign Out</button>
      </div> 
      

      

      <ToastContainer position='top-left' autoClose={2000}
      hideProgressBar={false} newestOnTop={false} closeOnClick
      rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark'
      
      />
      

    </div>
  )
}

export default SignOut
import React, { useState } from 'react'
import google from '../assets/google.png'
import github from '../assets/git.png'
import '../components/Login.css'
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../redux/wizzyCartSlice'
import { useNavigate } from 'react-router-dom'
import {  GithubAuthProvider } from "firebase/auth";


const Login = ()=>{

  const userInfo =  useSelector((state)=> state.wizzyCart.userInfo)

  const dispatch = useDispatch()
  const navigate =useNavigate()
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  const gitProvider = new GithubAuthProvider()

  const [isLogged, setIsLOgged] = useState(false)

  const handleGoogleLogin =(e)=>{
    e.preventDefault()
    signInWithPopup(auth, provider).then((result)=>{
      const user = result.user;
      dispatch(addUser({
        _id: user.uid,
        name: user.displayName,
        email: user.email,
        image:user.photoURL
      }));

      setIsLOgged(true)

      setTimeout(()=>{
        navigate(-1)
      },1500) 
      console.log(user)
    }).catch((error)=>{
      console.log(error)
    })

  }

  // const handleGoogleSignOut = () =>{
  //   signOut(auth).then(()=>{
  //     toast.success('Logged Out Successfully')
  //     dispatch(removeUser()) 
      
  //     setTimeout(()=> {navigate('/')}, 2000)
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // }


  const handleGitHubLogin = (e)=>{
    e.preventDefault()
    signInWithPopup(auth, gitProvider).then((result)=>{
      const user = result.user
      dispatch(addUser({
        _id: user.uid,
        name: user.displayName,
        email: user.email,
        image:user.photoURL
      }));
      setTimeout(()=>{
        navigate(-1)
      },1500) 
      console.log(user)
    }).catch((error)=> console.log(error))

  }

  const handleGitHubSignOut = ()=>{
    signOut(auth).then(()=> {toast.success('Logged Out Successfully')
    dispatch(removeUser())

    setTimeout(()=> {navigate('/')}, 1500)
  }).catch((error)=> console.log(error))
    
  }


  return (
    <div className='login-container'>
      <div className='google'>
        <div onClick={handleGoogleLogin} className='google-container'>
          <img  src={google} alt='google'/>
          <p>Sign-in with Google</p>
        </div>
        {/* <div className='google-btn'>
          {userInfo  && !isLogged ? <button onClick={handleGoogleSignOut}>Sign out</button> : null}
          
        </div> */}
      </div>
      
      <div className='git-hub'>
        <div className='git-container' onClick={handleGitHubLogin}>
          <img src={github} alt='git-hub'/>
          <p>Sign-in with Github</p>
        </div>
        <div className='google-btn'>
        {userInfo && handleGitHubLogin ? <button onClick={handleGitHubSignOut}>Sign out</button> : null}
        </div>
      </div>

      <ToastContainer position='top-left' autoClose={2000}
      hideProgressBar={false} newestOnTop={false} closeOnClick
      rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark'
      
      />
      

    </div>
  )
}

export default Login;
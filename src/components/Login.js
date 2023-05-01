
import {FaLock, FaUser} from 'react-icons/fa'
import { useContext} from 'react'
import DataContext from '../context/DataContext'
import './Login.css'

const Login = () => {
   const{setUsername,setPassword,setPosting} = useContext(DataContext)
  

   const loginHandler =(e)=>{
    e.preventDefault()
    setPosting(true)
    setUsername(e.target.username.value)
    setPassword(e.target.password.value)
   }

    return <>
        <main id='login-items'>
            <div className='login-child'>
                <h1>SRA</h1>
                <p>Please login with your username and password</p>
                <div className='login-form-item'>
                    <form className='login-form' onSubmit={loginHandler} >
                        <input type="text" placeholder='Username'  name='username'/>
                        <FaUser className='form-user'/>
                        <input type="password" placeholder='Password' name='password'/>
                        <FaLock className='form-user'/>
                        <div className='submit-contain'>
                        <input type="submit" value='Login' className='submit-button' />
                        </div>
                    </form>
                    
                </div>
            </div>
        </main>
    </>
}

export default Login;
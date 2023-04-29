
import {FaLock, FaUser} from 'react-icons/fa'
import './Login.css'

const Login = () => {
   

    return <>
        <main id='login-items'>
            <div className='login-child'>
                <h1>SRA</h1>
                <p>Please login with your username and password</p>
                <div className='login-form-item'>
                    <form className='login-form' >
                        <input type="text" placeholder='Username' />
                        <FaUser className='form-user'/>
                        <input type="password" placeholder='Password' />
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
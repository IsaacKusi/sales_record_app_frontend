
import { FaLock, FaUser } from 'react-icons/fa'
import { useContext} from 'react'
import DataContext from '../context/DataContext'
import './Login.css'

const Login = () => {
    const { setUsername, setPassword, setPosting,error, showError} = useContext(DataContext)

    const loginHandler = (e) => {
        e.preventDefault()
        setUsername(e.target.username.value)
        setPassword(e.target.password.value)
        setPosting(true)
    }

    return <>
        <main id='login-items'>
            <div className='login-child'>
                <h1>SRA</h1>
                <p>Please login with your username and password</p>
                {showError && <p style={{color:'red'}}>{error}</p>}
                <div className='login-form-item'>
                    <form className='login-form text-sm' onSubmit={loginHandler} >
                        <input type="text" placeholder='Username' name='username' autoComplete='off' required />
                        <FaUser className='form-user' />
                        <input type="password" placeholder='Password' name='password' required/>
                        <FaLock className='form-user' />
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
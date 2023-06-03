
import { FaLock, FaUser } from 'react-icons/fa'
import { useContext} from 'react'
import AuthContext from '../context/AuthContext'
import AppMetaContext from '../context/AppMetaContext'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './Login.css'

const Login = () => {
    const { setUsername, setPassword, setPosting,error, showError} = useContext(AuthContext)
    const {setLightMode, setNightMode} = useContext(AppMetaContext)

    const loginHandler = (e) => {
        e.preventDefault()
        setUsername(e.target.username.value)
        setPassword(e.target.password.value)
        setPosting(true)
        if(localStorage.getItem('nightModeStore')){
        setNightMode(JSON.parse(localStorage.getItem('nightModeStore')))
        setLightMode(JSON.parse(localStorage.getItem('lightModeStore')))
        }else{
            setLightMode(true)
        }
    }

    return <>
    <HelmetProvider>
        <Helmet>
              <title>
                Login to SRA
              </title>
              <meta name='description' content='login with credentials'/>
              <meta name='keywords' content='login, sales, records'/>
       </Helmet>
       </HelmetProvider>
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
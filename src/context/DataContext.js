import jwt_decode from "jwt-decode";
import { createContext, useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import api from '../api/post';


const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const history = useHistory()
    const [posting, setPosting] = useState(false)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [authToken, setAuthToken] = useState()
    const [userAccess, setUserAccess] = useState()
    const [sales, setSales] = useState([])
    const [error, setError] = useState()
    const [showError, setShowError] = useState(false)


    useEffect(() => {
        if (posting) {
            const login = async () => {
                try {
                    const response = await api.post('/api/token/',
                        { 'username': username, 'password': password },
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    )
                        setAuthToken(response.data)
                        setUserAccess(jwt_decode(response.data.access))
                        localStorage.setItem('authtoken', JSON.stringify(response.data))
                        history.push('/records')    
                }
                catch (err) {
                    if (err.response) {
                        console.log(err.response.data)
                        console.log(err.response.status)
                        console.log(err.response.headers)
                        setError(err.response.data.detail)
                        setShowError(true)
                        setTimeout(()=>{
                            setShowError(false)
                        }, 2000)
                    }
                }
            }
            login()
        }
        
    }, [username, password, posting, history])


    useEffect(() => {
        if (localStorage.getItem('authtoken')) {
            const authStored = JSON.parse(localStorage.getItem('authtoken'))
            setAuthToken(authStored)
            setUserAccess(jwt_decode(authStored.access))
            history.push('/records')
        } else { setAuthToken(null) }
    }, [history])


    const logoutHandler = useCallback(() => {
        localStorage.removeItem('authtoken')
        setUserAccess(null)
        setAuthToken(null)
        setPosting(false)
        history.push('/')
    }, [history])


    const updateToken = useCallback(async () => {
        try {
            const response = await api.post('/api/token/refresh/',
                { 'refresh': authToken?.refresh },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
                setAuthToken(response.data)
                setUserAccess(jwt_decode(response.data.access))
                localStorage.setItem('authtoken', JSON.stringify(response.data))
                history.push('/records')
        }
        catch (err) {
            if (err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
                logoutHandler()
            } 
        }
    }, [authToken?.refresh, history, logoutHandler])


    useEffect(() => {
        const nineMinutes = (1000 * 60 * 9)
        let interval = setInterval(() => {
            if (authToken) {
                updateToken()
            }
        }, nineMinutes)
        return () => clearInterval(interval)
    }, [updateToken, authToken])

    return <DataContext.Provider value={{
        setUsername, setPassword, username,
        password, posting, setPosting, authToken, setAuthToken, userAccess, setUserAccess,
        logoutHandler, sales, setSales, error, setError, showError, setShowError
    }}>
        {children}
    </DataContext.Provider>
}

export default DataContext;
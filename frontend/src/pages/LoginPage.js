import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const login = async () => {
        try {
        await signInWithEmailAndPassword(getAuth(), email, password);
        navigate('/articles')
        }
        catch (e) {
            setError(e.message);
        }
    }
    return (
        <>
        {error && <p className="error">{error}</p>}
        
        <h1>Login to your Account</h1>
        <Link to="/create-account">Don't Have an Account? Create an Account Here!</Link>

        <input class="login-input" placeholder="Email"value={email} onChange={e => setEmail(e.target.value)}/>
        <br/>
        <input class="login-input" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}type="password"/>
        <br/>

        <button class="login-button"onClick={login}>Log In</button>
        <br/>
        </>
    );
}

export default LoginPage;
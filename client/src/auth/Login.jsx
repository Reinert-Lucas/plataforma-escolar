import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.css'

function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({user, pass}),
            });
            const data = await response.json();
            if(data.success) {
                navigate(data.redirTo);
            } else {
                setErrMsg(data.message);
            }
        } catch (error) {
            alert(`Error: ${error}`)
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>Iniciar Sesion</h1>
                <input type="text" placeholder='Usuario' value={user} onChange={e => setUser(e.target.value)} />
                <input type="password" placeholder='Contraseña' value={pass} onChange={e => setPass(e.target.value)} />
                <span id='errMessage'>{errMsg}</span>
                <button>Ingresar con Google</button>
                <input type="submit" value="Iniciar Sesion" />
            </form>
        </>
    )
}

export default Login
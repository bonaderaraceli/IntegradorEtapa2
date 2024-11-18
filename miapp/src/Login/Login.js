import './Login.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    const loginUser = (event) => {
        event.preventDefault();

        console.log(email);
        console.log(password);

        if(email === '' || password === '') { 
            alert("Complete los campos");
            return;
        }

        if(email === 'pepe@gmail.com' && password === '1234') {
            alert("Login realizado");
            window.sessionStorage.setItem('user', 'pepe@gmail.com');
            navigate('/admin');         
        } else {
            alert("Usuario o contraseña incorrecta");
            navigate('/*');
        }
    }

    return(
        <>
            <h1 className="text-center mt-5">
                Login 
            </h1>

            <div className="container form-container">
                <form className="w-75">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            aria-describedby="emailHelp" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="mínimo de 8 caracteres" 
                        />
                    </div>

                    <div className='d-flex mt-5 justify-content-around'>                       
                        <button type="reset" className="btn w-25 button-margin btn-reset">
                            Borrar
                        </button>
                        <button type="submit" onClick={loginUser} className="btn w-25 button-margin btn-reset">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;

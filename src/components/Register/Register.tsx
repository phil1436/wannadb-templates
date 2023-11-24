import { Link } from 'react-router-dom';
import './Register.scss';
import { useState } from 'react';
//import APIService from '../../utils/ApiService';

function Register() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(' ');

    const onRegister = () => {
        if (password !== repeatPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        if (password.length < 3) {
            setErrorMessage('Password must be at least 3 characters long!');
            return;
        }

        if (name.length < 3) {
            setErrorMessage('Username must be at least 3 characters long!');
            return;
        }

        /* APIService.login(name, password).then((data) => {
            if (data) {
                setErrorMessage(' ');
                localStorage.setItem('wannadbuser', name);
                window.location.href = '/';
            } else {
                setErrorMessage('Invalid username or password!');
            }
        }); */
    };

    return (
        <div className="Register">
            <h1>
                wanna<span className="db">db</span> <br />
                <i>REGISTER</i>
            </h1>
            <div>
                <p className="errorMsg">{errorMessage}</p>
                <input
                    type="text"
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Repeat Password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />

                <button className="btn" onClick={onRegister}>
                    Register
                </button>
                <Link className="btn" to="/login">
                    Back
                </Link>
            </div>
        </div>
    );
}

export default Register;

import React, { useState } from "react";
import './Login.css';
import logo from "../assets/logo.svg";
import api from "../services/api";
 

export default function Login ({ history }) {
    const [ username, setUsername ] = useState('');   //variável que armazenará o usuário digitado no formulário
    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });
        console.log(response);

        history.push('/main');
    }

    return (
        <div className="login-container">
            <form onSubmit={ handleSubmit }>
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Digite seu usuario no Github"
                    value={ username }
                    onChange = { e => setUsername(e.target.value)}                    
                />
                <button type="submit" >Enviar </button>
            </form>
        </div>

    );
}
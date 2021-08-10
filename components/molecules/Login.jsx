import axios from 'axios'
import Router from 'next/router'
import React, { useState, useEffect } from 'react'

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' })
    function getDatas(e) {
        const { value, name } = e.target
        form[name] = value
        setForm({ email: form.email, password: form.password })
    }
    async function login(e) {
        await e.preventDefault()
        await axios
            .post('http://api.iziw.com.br/api/auth/login', {
                email: form.email,
                password: form.password,
            })
            .then((token) => {
                console.log(token.data)
                localStorage.setItem('token_login', token.data.access_token)
                axios
                    .post('http://api.iziw.com.br/api/auth/me', null, {
                        headers: {
                            Authorization: `Bearer ${token.data.access_token}`,
                        },
                    })
                    .then((get) => {
                        console.log(get)
                        localStorage.setItem('user', JSON.stringify(get.data))
                        let user = localStorage.getItem('user')
                        user = JSON.parse(user)
                        Router.push({
                            pathname: `/user/${user.name}`,
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                console.log('jhony')
                setForm({ email: '', password: '' })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        const tokenUser = localStorage.getItem('token_login')
        if (tokenUser) {
            if (user) {
                Router.push({
                    pathname: `/user/${user.name}`,
                })
            }
        }
    }, [])

    return (
        <form className="" onSubmit={login}>
            <div className="inputs">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={form.email}
                    placeholder="Digite o seu email exemplo: jhony@gmail.com"
                    onChange={getDatas}
                />
            </div>
            <div className="inputs">
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    value={form.password}
                    placeholder="Digite sua Senha"
                    onChange={getDatas}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

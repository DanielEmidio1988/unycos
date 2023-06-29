import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import styles from '../../styles/LoginModal.module.css'
import logoUnycos from '../../assets/utils/Logo Unycos Dark.svg'

function LoginModal(){
    const context = useContext(GlobalContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [errorLogin, setErrorLogin] = useState(false)

    function sucessLogin(){
        if(login === 'usermaster' && password === 'master' ){
            const updateErrorLogin = false
            const updateShowModal = false
            const updateTypeModal = ''
            const updateDataUser = {
                name: 'usermaster',
                notifications: 0
            }
            context.setDataUser(updateDataUser)
            context.setShowModal(updateShowModal)
            context.setTypeModal(updateTypeModal)
            setErrorLogin(updateErrorLogin)
        }else{
            const updateErrorLogin = true
            setErrorLogin(updateErrorLogin)
        }
        return 
    }

    function closeLogin(){
        const updateTypeModal = ''
        const updateShowModal = false
        context.setShowModal(updateShowModal)
        context.setTypeModal(updateTypeModal)

        return
    }

    function registerUser(){

    }

    return(
        <div className={styles.login_container}>
            <h3 onClick={()=>closeLogin()}>X</h3>

            <h1>Login</h1>
            <input type='text' placeholder='USERNAME' value={login} onChange={(event)=>setLogin(event.target.value)}/>
            {errorLogin && !login ? <p>¡Usuario desinformado!</p> : ''}
            <input type='password' placeholder='CONTRASEÑA' value={password} onChange={(event)=>setPassword(event.target.value)}/>
            {errorLogin && !login ? <p>¡Contraseña no informada!</p> : ''}
            
            <button onClick={()=>sucessLogin()}>Login</button>

            {errorLogin ? <p>¡Usuario o contraseña invalido!</p> : ''}

            <p>¿olvido la contraseña?</p>

            <p>¿No tienes una cuenta? <span onClick={()=>registerUser()}>registro</span></p>

        </div>
    )
}

export default LoginModal
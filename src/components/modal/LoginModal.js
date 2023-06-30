import { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import styles from '../../styles/LoginModal.module.css'

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
        const updateTypeModal = 'registro'
        context.setTypeModal(updateTypeModal)

        return
    }

    return(
        <div className={styles.login_container}>
            <h3 onClick={()=>closeLogin()}>X</h3>

            <h1>Login</h1>
            <input type='text' className={errorLogin && !login ? styles.input_error_message : ''} placeholder='USUARIO' value={login} onChange={(event)=>setLogin(event.target.value)}/>
            {errorLogin && !login ? <p className={styles.error_message}>¡Usuario desinformado!</p> : ''}
            <input type='password' className={errorLogin && !password ? styles.input_error_message : ''} placeholder='CONTRASEÑA' value={password} onChange={(event)=>setPassword(event.target.value)}/>
            {errorLogin && !password ? <p className={styles.error_message}>¡Contraseña no informada!</p> : ''}
            
            <button onClick={()=>sucessLogin()} className={styles.button_gold}>Login</button>

            {errorLogin ? <p className={styles.error_message}>¡Usuario o contraseña invalido!</p> : ''}

            <p className={styles.link_reset_password}>¿olvido la contraseña?</p>

            <p>¿No tienes una cuenta? <span onClick={()=>registerUser()}>registro</span></p>

        </div>
    )
}

export default LoginModal
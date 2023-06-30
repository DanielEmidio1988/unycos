import { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import styles from '../../styles/RegisterModal.module.css'

function RegisterModal(){
    const context = useContext(GlobalContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorRegister, setErrorRegister] = useState(false)

    function registerUsuario(){
        if(login !== '' && password !== '' & confirmPassword !== '' & password === confirmPassword){
            const updateErrorLogin = false
            const updateShowModal = false
            const updateTypeModal = ''
            const updateDataUser = {
                name: login,
                notifications: 0
            }
            context.setDataUser(updateDataUser)
            context.setShowModal(updateShowModal)
            context.setTypeModal(updateTypeModal)
            setErrorRegister(updateErrorLogin)
        }else{
            const updateErrorRegister = true
            setErrorRegister(updateErrorRegister)
        }
        return
    }

    function closeRegister(){
        const updateTypeModal = ''
        const updateShowModal = false
        context.setShowModal(updateShowModal)
        context.setTypeModal(updateTypeModal)

        return
    }

    return(
        <div className={styles.register_container}>
            
            <h1>Registro</h1>

            <input type='text' value={login} onChange={(event)=>setLogin(event.target.value)} className={errorRegister && !login ? styles.input_error_message : ''} placeholder='USUÁRIO'/>
            {errorRegister && !login ? <p className={styles.error_message}>¡Usuario desinformado!</p> : ''}

            <input type='password' value={password} onChange={(event)=>setPassword(event.target.value)} className={errorRegister && !password ? styles.input_error_message : ''} placeholder='CONTRASEÑA'/>
            <input type='password' value={confirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)} className={errorRegister && !password ? styles.input_error_message : ''} placeholder='CONFIRMAR CONTRASEÑA'/>
            {errorRegister && password !== confirmPassword ? <p className={styles.error_message}>¡Las contraseñas no coinciden!</p> : ''}
            {errorRegister && !password & !confirmPassword ? <p className={styles.error_message}>¡Las contraseñas desinformado!</p> : ''}

            <div>
                <button className={styles.button_gold} onClick={()=>registerUsuario()}>Registro</button>
                <button className={styles.button_gold} onClick={()=>closeRegister()}>Cancelar</button>
            </div>

        </div>
    )
}

export default RegisterModal
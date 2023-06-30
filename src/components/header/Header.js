import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import logo from '../../assets/utils/Logo Unycos.png'
import menuicon from '../../assets/icons/person-outline.svg'
import menuonline from '../../assets/utils/bx-menu.svg'
import styles from '../../styles/Header.module.css'

function Header(){
    const context = useContext(GlobalContext)
    const [showMenu, setShowMenu] = useState(false)

    function openMenuConectado(){
        const updateMenu = !context.showModal
        const updateTypemenu = context.showModal ? '' : 'menu_conectado'
        context.setShowModal(updateMenu)
        context.setTypeModal(updateTypemenu)
        return
    }

    function openMenuNoConectado(){
        const updateMenu = !showMenu
        setShowMenu(updateMenu)
        console.log(updateMenu)
    }

    function LoginUser(){
        const menu = !context.showModal
        context.setShowModal(menu)
        let typemenu = context.showModal ? '' : 'login_user'
        context.setTypeModal(typemenu)
        return
    }

    function registerUser(){
        const updateTypeModal = 'registro'
        const updateShowModal = true
        context.setShowModal(updateShowModal)
        context.setTypeModal(updateTypeModal)
        return
    }

    return(
        <header className={styles.header}>
            <div className={styles.logo_area}>
                <img src={logo} alt='Logo Unycos'/>
            </div>
            <nav className={styles.menu_area}>
                {context.dataUser ?
                    <img src={menuonline} onClick={()=>openMenuConectado()} className={styles.menu_conectado} alt='Menu Conectado'/>   
                        :
                    <img src={menuicon} onClick={()=>openMenuNoConectado()} alt='Menu Unycos'/>

                }
                
                
                <ul className={!showMenu ? styles.menu_close : styles.menu_open}>
                    <li>CURSOS</li>
                    {
                        context.dataUser ?
                        <>
                            <li onClick={()=>openMenuConectado()}>HOLA, {context.dataUser.name}</li>
                        </>
                        :
                        <>
                            <li onClick={()=>registerUser()}>REGISTER</li>
                            <li onClick={()=>LoginUser()}>LOG IN</li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header
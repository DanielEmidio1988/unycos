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
        const updateShowMenu = !showMenu
        const updateTypemenu = context.showModal ? '' : 'menu_conectado'
        context.setShowModal(updateMenu)
        context.setTypeModal(updateTypemenu)
        setShowMenu(updateShowMenu)
        return
    }

    function LoginUser(){
        const menu = !context.showModal
        context.setShowModal(menu)
        let typemenu = context.showModal ? '' : 'login_user'
        context.setTypeModal(typemenu)
        setShowMenu(false)
        return
    }

    function registerUser(){
        const updateTypeModal = 'registro'
        const updateShowModal = true
        context.setShowModal(updateShowModal)
        context.setTypeModal(updateTypeModal)
        setShowMenu(false)
        return
    }

    return(
        <header className={styles.header}>
            <div className={styles.logo_area}>
                <img src={logo} alt='Logo Unycos'/>
            </div>
            <nav className={styles.menu_area}>
                {context.dataUser ?
                    <img src={menuonline} onClick={()=>setShowMenu(!showMenu)} className={styles.menu_conectado} alt='Menu Conectado'/>   
                        :
                    <img src={menuicon} onClick={()=>setShowMenu(!showMenu)} alt='Menu Unycos'/>

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
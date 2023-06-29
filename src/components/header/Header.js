import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import logo from '../../assets/utils/Logo Unycos.png'
import menuicon from '../../assets/icons/person-outline.svg'
import styles from '../../styles/Header.module.css'

function Header(){
    // const [openMenu, setOpenMenu] = useState(false)
    const context = useContext(GlobalContext)

    function openMenu(){
        const menu = !context.showModal
        context.setShowModal(menu)
        let typemenu = context.showModal ? '' : 'menu_conectado'
        context.setTypeModal(typemenu)
        // if(!context.showModal){
        //     document.body.classList.add('modal-open')
        // }else{
        //     document.body.classList.remove('modal-open')
        // }
        return
    }

    function LoginUser(){
        const menu = !context.showModal
        context.setShowModal(menu)
        let typemenu = context.showModal ? '' : 'login_user'
        context.setTypeModal(typemenu)
        // if(!context.showModal){
        //     document.body.classList.add('modal-open')
        // }else{
        //     document.body.classList.remove('modal-open')
        // }
        return
    }

    // return{
    //     dataUser, 
    //     setDataUser,
    //     loading, 
    //     setLoading,
    //     showModal, 
    //     setShowModal,
    //     typeModal, 
    //     setTypeModal,
    // }

    return(
        <header className={styles.header}>
            <div className={styles.logo_area}>
                <img src={logo} alt='Logo Unycos'/>
            </div>
            <nav className={styles.menu_area}>
                <img src={menuicon} alt='Menu Unycos'/>
                <ul className={styles.menu_close}>
                    <li>CURSOS</li>
                    {
                        context.dataUser ?
                        <>
                            <li onClick={()=>openMenu()}>HOLA, {context.dataUser.name}</li>
                        </>
                        :
                        <>
                            <li>REGISTER</li>
                            <li onClick={()=>LoginUser()}>LOG IN</li>
                        </>
                    }

                    {/* <li>HOLA GLAYDSTON</li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header
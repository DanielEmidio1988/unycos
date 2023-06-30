import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import styles from '../../styles/MenuConectado.module.css'
import logoUnycos from '../../assets/utils/Logo Unycos Dark.svg'
import iconnotificacion from '../../assets/icons/bell-outline-on.svg'
import iconnotificacioff from '../../assets/icons/bell-outline.svg'
import iconWhatsapp from '../../assets/icons/whatsapp.svg'

function MenuConectado(){
    const context = useContext(GlobalContext)

    function cerrarSection(){
        const updateTypeModal = ''
        const updateShowModal = false
        const updateDataUser = ''
        context.setDataUser(updateDataUser)
        context.setShowModal(updateShowModal)
        context.setTypeModal(updateTypeModal)
        return
    }

    return(
        <>
            <div className={styles.modal_menuConectado}>
                <div>

                </div>
                <div>
                {/* {context.dataUser.name} */}
                    <img src={logoUnycos} alt='logo Unycos'/>
                    <h1>Hola, <span>DANIELA</span> <span> <img src={context.dataUser.notificacion > 0 ? iconnotificacion : iconnotificacioff} alt='icon notification'/></span></h1>
                    <p>Panel de Control</p>
                    <p>Mis Cursos</p>
                    <p>Perfil</p>
                    <p>Ajustes</p>
                    <p>Todos Los Cursos</p>
                    <span>Contáctanos or Whatsapp</span>
                    <p className={styles.option_mobile}><img src={iconWhatsapp} alt='icon whatsapp'/>+34 653 46 73 60</p>
                    <p onClick={()=>cerrarSection()}>Cerrar Sesión</p>
                </div>

            </div>
        </>
    )
}

export default MenuConectado
import logo from '../../assets/utils/Logo Unycos.png'
import menuicon from '../../assets/icons/person-outline.svg'
import styles from '../../styles/Header.module.css'

function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo_area}>
                <img src={logo} alt='Logo Unycos'/>
            </div>
            <nav className={styles.menu_area}>
                <img src={menuicon} alt='Menu Unycos'/>
                <ul className={styles.menu_close}>
                    <li>CURSOS</li>
                    <li>REGISTER</li>
                    <li>LOG IN</li>
                    {/* <li>HOLA GLAYDSTON</li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header
import styles from '../styles/HomePage.module.css'
import Header from "../components/header/Header"
import MenuConectado from '../components/modal/MenuConectado'
import LoginModal from '../components/modal/LoginModal'
import RegisterModal from '../components/modal/RegisterModal'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import PresentationPage from "../components/homepage/PresentationPage"
import FormatCourse from "../components/homepage/FormatCourse"
import SliderCentral from '../components/homepage/SliderCentral'
import ContenidoExclusivo from '../components/homepage/ContenidoExclusivo'
import SectionsInfos from '../components/homepage/SectionInfos'
import ArticulosRelacionados from '../components/homepage/ArticulosRelacionados'
import Footer from '../components/footer/Footer'
import logoFacebook from '../assets/icons/facebook-outline.svg'
import logoInstagram from '../assets/icons/instagram.svg'
import logoTwitter from '../assets/icons/twitter-outline.svg'
import logoYoutube from '../assets/icons/youtube.svg'
import whatsappicon from '../assets/icons/whatsapp.svg'

function HomePage(){
    const context = useContext(GlobalContext)

    return(
        <div className={context.showModal ? styles.container : ''}>
            
            {context.showModal && context.typeModal === 'menu_conectado' ?
            <>
                <MenuConectado/>
                <div className={styles.menu_overlay}></div>
            </>
            :
            ''}

            {context.showModal && context.typeModal === 'login_user' ?
            <>
                <LoginModal/>
                <div className={styles.menu_overlay}></div>
            </>
            :
            ''}

            {context.showModal && context.typeModal === 'registro' ?
            <>
                <RegisterModal/>
                <div className={styles.menu_overlay}></div>
            </>
            :
            ''}
            
            <Header/>
            <main className={styles.main_container}>
                <PresentationPage/>
                <FormatCourse/>
                <div className={styles.common_questions}>
                    <h2>Aprende natación con una campeona olímpica</h2>
                    <button className={styles.button_gold}>Preguntas Frecuentes</button>
                </div>
                <SliderCentral/>
                <ContenidoExclusivo/>
                <SectionsInfos/>
                <ArticulosRelacionados/>
                <div className={styles.boxblog}>
                    <h1>Aprende con los Mejores</h1>
                    <h3>Detrás de cada éxito, hay una história.<br/> Conoce En Nuestro Blog</h3>
                    <button className={styles.button_dark}>Leer Más en Nuestro Blog</button>                    
                </div>
                <div className={styles.boxunetelacomunidad}>
                    <h1>
                        Únete a la Comunidad
                    </h1>
                    <div>
                        <img src={logoFacebook} alt='logo Unycos Facebook'/>
                        <img src={logoInstagram} alt='logo Unycos Instagram'/>
                        <img src={logoTwitter} alt='logo Unycos Twitter'/>
                        <img src={logoYoutube} alt='logo Unycos Youtube'/>
                    </div>
                    <h3>¿Dudas? Contáctanos por whatsapp</h3>
                    <button className={styles.button_dark}><img src={whatsappicon} alt='Icone Whatsapp'/>+34 653 46 73 60</button>

                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage
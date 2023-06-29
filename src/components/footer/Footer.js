import styles from '../../styles/Footer.module.css'
import logoUnycos from '../../assets/utils/Logo Unycos.png'
import logoFacebook from '../../assets/icons/facebook-outline.svg'
import logoInstagram from '../../assets/icons/instagram.svg'
import logoTwitter from '../../assets/icons/twitter-outline.svg'
import logoYoutube from '../../assets/icons/youtube.svg'

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.footer_area1}>
                <img src={logoUnycos} alt='logo Unycos'/>

            </div>
            <div className={styles.footer_area2}>
                <div>
                    <img src={logoFacebook} alt='logo Unycos Facebook'/>
                    <img src={logoInstagram} alt='logo Unycos Instagram'/>
                    <img src={logoTwitter} alt='logo Unycos Twitter'/>
                    <img src={logoYoutube} alt='logo Unycos Youtube'/>
                </div>
                <div>
                    <a href='#'>Terminos y condiciones</a>
                    <a href='#'>Politica de privacidad</a>
                    <a href='#'>Aviso legal</a>
                </div>
            </div>
            <div className={styles.footer_area3}>
                <p>USD ($)</p>
                <p>/</p>
                <p>EUR (€)</p>

            </div>

        </footer>
    )
}

export default Footer
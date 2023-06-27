import styles from '../../styles/HomePage.module.css'
import iconmodules from '../../assets/icons/icon-medal-modules.svg'
import iconhours from '../../assets/icons/icon-medal-hours.svg'

function FormatCourse(){
    return(
        <section className={styles.format_courses}>      

            <div>
                <img src={iconmodules} alt='Icon Modules'/>
                <h3>12 Módulos</h3>
            </div>
            <div>
                <img src={iconhours} alt='Icon Modules'/>
                <h3>+3,5 horas</h3>
            </div>
            <button className={styles.button_desktop}>
                Mas Información
            </button>

            <button className={styles.button_mobile}>
                Solicitar Información
            </button>

        </section>
    )
}

export default FormatCourse
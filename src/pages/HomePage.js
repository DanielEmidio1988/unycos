import styles from '../styles/HomePage.module.css'
import Header from "../components/header/Header"
import PresentationPage from "../components/homepage/PresentationPage"
import FormatCourse from "../components/homepage/FormatCourse"

function HomePage(){
    return(
        <body>
            <Header/>
            <main className={styles.container}>
                <PresentationPage/>
                <FormatCourse/>
                <div className={styles.common_questions}>
                    <h2>Aprende natación con una campeona olímpica</h2>
                    <button>Preguntas Frecuentes</button>
                </div>
            </main>
        </body>
    )
}

export default HomePage
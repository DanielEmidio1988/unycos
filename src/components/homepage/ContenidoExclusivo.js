import styles from '../../styles/HomePage.module.css'
import ebookicon from '../../assets/icons/book-outline.svg'
import video360icon from '../../assets/icons/360.svg'
import testsicon from '../../assets/icons/tests.svg'
import tasksicon from '../../assets/icons/tasks.svg'
import staricon from '../../assets/utils/Vector.svg'


function ContenidoExclusivo(){
    return(
        <section className={styles.contenido_exclusivo}> 
            <h1>Contenido Exclusivo</h1>
            <div className={styles.contenido_exclusivofirstbox}>
                <div>
                    <img src={ebookicon} alt='Icon E-Books'/>
                    <p>E-Books</p>
                </div>
                <div>
                    <img src={video360icon} alt='Icon 360º Videos'/>
                    <p>360º Videos</p>
                </div>
                <div>
                    <img src={testsicon} alt='Icon Tests'/>
                    <p>Tests</p>
                </div>
                <div>
                    <img src={tasksicon} alt='Icon Tasks'/>
                    <p>Tareas</p>
                </div>
            </div>
            <div className={styles.contenido_exclusivosecondbox}>
                <button className={styles.button_gold}>Mas Información</button>
            </div>

            <div className={styles.contenido_exclusivothirdbox}>
                <h2>Destaques Del Curso</h2>
                <div className={styles.contenido_exclusivothirdboxdestaques}><span>03</span><p>Bases biomecánicas de la Natación </p><span>&gt;</span></div>
                <div className={styles.contenido_exclusivothirdboxdestaques}><span>06</span><p> Bases biomecánicas de la Natación </p><span>&gt;</span></div>
                <div className={styles.contenido_exclusivothirdboxdestaques}><span>08</span><p> Bases biomecánicas de la Natación </p><span>&gt;</span></div>
                <div className={styles.contenido_exclusivothirdboxdestaques}><span>11</span><p> Bases biomecánicas de la Natación </p><span>&gt;</span></div>
                <button className={styles.button_dark}>Ver Programa Completo</button>
                <div className={styles.contenido_exclusivothirdboxcalificacion}>
                    <img src={staricon} alt='Icon Star'/>
                    <h3>Los Estudiantes Le Dan a Unycos Una Calificación Promedio de 4.7 de 5 Estrellas.</h3>
                </div>
                <p>100% de garantia de satisfacción. 30 dias de garantia de devolución de dinero.</p>
            </div>
        </section>
    )
}

export default ContenidoExclusivo
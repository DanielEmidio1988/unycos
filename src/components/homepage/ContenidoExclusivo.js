import styles from '../../styles/HomePage.module.css'
import ebookicon from '../../assets/icons/book-outline.svg'
import video360icon from '../../assets/icons/360.svg'
import testsicon from '../../assets/icons/tests.svg'
import tasksicon from '../../assets/icons/tasks.svg'


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
                <button>Mas Información</button>
            </div>

            <div className={styles.contenido_exclusivothirdbox}>
                <h2>Destaques Del Curso</h2>
                <div><p><span>03</span> Bases biomecánicas de la Natación <span></span></p></div>
                <div><p><span>06</span> Bases biomecánicas de la Natación <span></span></p></div>
                <div><p><span>08</span> Bases biomecánicas de la Natación <span></span></p></div>
                <div><p><span>11</span> Bases biomecánicas de la Natación <span></span></p></div>
                <button>Ver Programa Completo</button>
                <div>
                    {/* <img src={} alt='Icon Star'/> */}
                    <h3>Los Estudiantes Le Dan a Unycos Una Calificación Promedio de 4.7 de 5 Estrellas.</h3>
                    <p>100% de garantia de satisfacción. 30 dias de garantia de devolución de dinero.</p>
                </div>
            </div>


        </section>
    )
}

export default ContenidoExclusivo
import { useEffect, useState } from 'react'
import styles from '../../styles/HomePage.module.css'
import imagecurso1 from '../../assets/img/ismaelcurso.svg'
import imagecurso2 from '../../assets/img/lewiscurso.svg'
import imagecurso3 from '../../assets/img/marcuscoopercurso.svg'
import imagecurso4 from '../../assets/img/lewiscursosmobile.svg'
import imagecurso5 from '../../assets/img/marcuscoopercursomobile.svg'
import thumbupgoldicon from '../../assets/icons/thumbs-up.svg'
import thumbupgrayicon from '../../assets/icons/thumbsgray-up.svg'
import photouseranamilena from '../../assets/utils/photouseranamilenagomez.svg'
import checkmarkicon from '../../assets/utils/checkmark-circle-2.svg'


function SectionsInfos(){
    const [titleCommentsArea, setTitleCommentsArea] = useState('Comentarios de los estudiantes')

    useEffect(()=>{
        const updateHeaderComment = () =>{
            if(window.innerWidth < 500){
                setTitleCommentsArea('Comentários de usuários')
            }else{
                setTitleCommentsArea('Comentarios de los estudiantes')
            }
        }
        window.addEventListener('resize',updateHeaderComment)
        return()=>{
            window.removeEventListener('resize',updateHeaderComment)
        }
    },[])

    return(
        <section className={styles.sectionsinfos}>
            <div className={styles.sectionsinfos_boxlessonplan}>
                <h2>Lesson Plan</h2>
                <article>
                    <div>
                        <h1>01</h1>
                        <div>
                            <h2>Presentación</h2>
                            <p>Mireia, nuestra campeona, te da la bienvenida al curso que te llevará a la cima de la natación. Conocerás su técnica, su entrenamiento y muchas cosas más de la mano de un equipo de profesionales de fama internacional.</p>
                        </div>
                    </div>
                    <div>
                        <h1>02</h1>
                        <div>
                            <h2>Natación: Aspectos Generales</h2>
                            <p>Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina.</p>
                        </div>
                    </div>
                    <div>
                        <h1>03</h1>
                        <div>
                            <h2>Bases Biomecánicas de la natación</h2>
                            <p>Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina.</p>
                        </div>
                    </div>
                    <div>
                        <h1>04</h1>
                        <div>
                            <h2>Estilos de Natación</h2>
                            <p>Una perfecta ejecución de estos estilos, unida al control y a la resistencia, te permitirá convertirte en un nadador interdisciplinar. Mireia y su equipo te enseñarán las claves y los secretos para dominarlos todos desde cero.</p>
                        </div>
                    </div>
                    <div>
                        <h1>05</h1>
                        <div>
                            <h2>Virajes Y Saltos</h2>
                            <p>El manejo de los saltos y virajes mejorará considerablemente tu rendimiento y tu técnica de natación. Los profesionales de fama internacional que asisten a Mireia te enseñan a perfeccionar esta técnica.</p>
                        </div>
                    </div>
                    <button>Ver Todos</button>
                </article>
            </div>
            
            <div className={styles.sectionsinfos_infoscursos}>
                <h2>Más Cursos</h2>
                <div>

                    <img src={imagecurso3} alt='Marcus Cooper Piraguismo'/>
                    <img src={imagecurso1} alt='Ismael Cala Desarrollo Personal'/>
                    <img src={imagecurso2} alt='Lewis Amarante Maquillaje'/>
                    {/* {window.innerWidth > 500 ?
                        <>
                            <img src={imagecurso3} alt='Marcus Cooper Piraguismo'/>
                            <img src={imagecurso1} alt='Ismael Cala Desarrollo Personal'/>
                            <img src={imagecurso2} alt='Lewis Amarante Maquillaje'/>
                        </>
                    :
                        <>
                            <img src={imagecurso5} alt='Marcus Cooper Piraguismo'/>
                            <img src={imagecurso4} alt='Lewis Amarante Maquillaje'/>
                        </>
                    } */}
       
                </div>

            </div>
            <div className={styles.sectionsinfos_masinfo}>
                <form action='#'>
                    <h2>Obtén Más Información</h2>
                    <div className={styles.sectionsinfos_form_firstbox}>
                        <input type='text' placeholder='NOMBRE COMPLETO'/>
                        <input type='text' placeholder='CORREO ELETRÓNICO'/>
                        <select name='country'>
                            <option value='' disabled selected hidden>PAIS/CODIGO PAIS</option>
                            <option value='Brazil'>Brasil</option>
                            <option value='States United'>Estados Unidos</option>
                            <option value='Spain'>Espanha</option>
                        </select>
                        {/* <input type='text' placeholder='PAIS/CODIGO PAIS'/> */}
                        <input type='text' placeholder='TELÉFONO'/>
                    </div>
                    <div className={styles.sectionsinfos_form_secondbox}>
                        <input type='checkbox' name='condicionesuso'/><label for='condicionesuso'>Acepto las <a href='#'>condiciones de uso</a> y <a href='#'>proteccíon de datos</a>.</label>
                        <input type='checkbox' name='ofertasypromociones'/><label for='ofertasypromociones'>Me gustaria recibir información sobre nuevos cursos, ofertas y promociones.</label>
                    </div>
                    <button>Enviar</button>
                </form>
                <article>
                    <h2>{titleCommentsArea}</h2>
                    <h3><img src={thumbupgoldicon} alt='thumbup icon'/><span>98.7% de valoraciones positivas</span> / total de 726 valoraciones</h3>
                    <div className={styles.sectionsinfos_boxcomments}>
                        <div>
                            <div>
                                <h3>SV</h3>
                            </div>
                            <div>
                                <p>Ha sido un curso muy gratificante,en el que he podido aprender muchas cosas gracias a los grandes ponentes que han colaborado y aportado sus conocimientos. Ahora toca ponerse manos a la obra y poner en practica todo lo aprendido. Estoy muy orgulloso.</p>
                                <h3>Samuel Vidal Hernández<span><img src={thumbupgrayicon} alt='thumbup icon'/> HACE 2 MESES</span></h3>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h3>F</h3>
                            </div>
                            <div>
                                
                                <p className={styles.data_info_unycos_team}><img src={checkmarkicon} alt='check icon'/><span></span> Equipo Unycos <span> - hace 3 meses</span></p>
                                <p>Este texto es una simulación de una contestación del equipo o del profesor directamente. El texto tendrá un aspecto diferenciado, y también tendrá un destaque mayor.</p>
                                <p>Seguir creciendo como profesional es necesario pero si lo haces junto a tus ídolos se convierte en un placer. Gracias por esta experiencia y espero poder comentarlo en persona con sus protagonistas muy pronto.</p>
                                <h3>Francisco José Sacedo <span><img src={thumbupgrayicon} alt='thumbup icon'/> HACE 3 MESES</span></h3>
                                
                            </div>
                        </div>

                        <div>
                            <div>
                                <img src={photouseranamilena} alt='Photo User'/>
                            </div>
                            <div>
                                
                                <p className={styles.data_info_unycos_team}><img src={checkmarkicon} alt='check icon'/> <span>Mireia Belmonte</span> • Profesor  <span> - hace 3 meses</span></p>
                                <p>Hola, Ana! Continúa a practicar y seguro que mejorarás más y más tu desempeño! Un abrazo!</p>
                                <p>Profundizar en el entrenamiento y proceso de enseñanza</p>
                                <h3>Ana Milena Gómez <span><img src={thumbupgrayicon} alt='thumbup icon'/> HACE 3 MESES</span></h3>
                            </div>
                        </div>
                    </div>
                    <button>Ver Más</button>

                </article>
            </div>

        </section>
    )
}

export default SectionsInfos
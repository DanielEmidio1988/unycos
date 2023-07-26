import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import styles from '../../styles/HomePage.module.css'
import thumbupgoldicon from '../../assets/icons/thumbs-up.svg'
import thumbupgrayicon from '../../assets/icons/thumbsgray-up.svg'

function SectionsInfos(){
    const [titleCommentsArea, setTitleCommentsArea] = useState('Comentarios de los estudiantes')
    const context = useContext(GlobalContext)
    const [visibleComments, setVisibleComments] = useState([])
    const [totalComments, setTotalComments] = useState(3)     

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

    function moreComments(){
        if(totalComments <= context.dataCommentsEstudiantes.length){
            const updateTotalComments = totalComments + 1
            setTotalComments(updateTotalComments)
            setVisibleComments(context.dataCommentsEstudiantes.filter((comment, index) => index < totalComments))
        }
        console.log('entrou')
        return
    }

    useEffect(() => {
        setVisibleComments(context.dataCommentsEstudiantes.filter((comment, index) => index < totalComments))
      }, [totalComments])

    return(
        <section className={styles.sectionsinfos}>
            <div className={styles.sectionsinfos_boxlessonplan}>
                <h2>Lesson Plan</h2>
                <article>
                    {context.dataLessonPlan.length > 0 ?
                    context.dataLessonPlan.map((lessonPlan)=>{
                        return(
                            <div key={lessonPlan.id}>
                                <h1>{lessonPlan.id}</h1>
                                <div>
                                    <h2>{lessonPlan.title}</h2>
                                    <p>{lessonPlan.content}</p>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div>
                    <h1>XX</h1>
                    <div>
                        <h2>Error</h2>
                        <p>No data available</p>
                    </div>
                    </div>}
                    <button>Ver Todos</button>
                </article>
            </div>       
            <div className={styles.sectionsinfos_infoscursos}>
                <h2>Más Cursos</h2>
                <div>
                    {context.dataCourse.length > 0 ?

                    context.dataCourse.map((course, index)=>{
                        return(
                            <img key={index} src={course.photo} alt='Photo Course'/>
                        )
                    })
                    :
                    <h1>No data available</h1>}  
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
                        <input type='text' placeholder='TELÉFONO'/>
                    </div>
                    <div className={styles.sectionsinfos_form_secondbox}>
                        <input type='checkbox' name='condicionesuso'/><label for='condicionesuso'>Acepto las <a href='#'>condiciones de uso</a> y <a href='#'>proteccíon de datos</a>.</label>
                        <input type='checkbox' name='ofertasypromociones'/><label for='ofertasypromociones'>Me gustaria recibir información sobre nuevos cursos, ofertas y promociones.</label>
                    </div>
                    <button className={styles.button_gold}>Enviar</button>
                </form>
                <article>
                    <h2>{titleCommentsArea}</h2>
                    <h3><img src={thumbupgoldicon} alt='thumbup icon'/><span>98.7% de valoraciones positivas</span> / total de 726 valoraciones</h3>
                    <div className={styles.sectionsinfos_boxcomments}>
                        {context.dataCommentsEstudiantes.length > 0 ?                   
                        visibleComments
                        .map((comment, index)=>{
                            return(
                                <div key={index}>
                                    <div>      
                                            {comment.photo ?
                                            <img src={comment.photo} alt='Photo User' className={styles.photo_estudiantes}/>
                                            :
                                            <h3>
                                                {comment.username.match(/\b\w/g).slice(0,2).join('')}
                                            </h3>
                                            }                                      
                                    </div>
                                    <div>
                                                 
                                        {comment.reply.author ? 
                                            <p className={styles.data_info_unycos_team}>
                                                <span>
                                                    {comment.reply.author !== comment.reply.title ?
                                                     comment.reply.author 
                                                     : 
                                                     ''
                                                    }
                                                </span>
                                                {comment.reply.title}
                                                <span>
                                                    - hace {comment.date}
                                                </span>
                                            </p> 
                                            : 
                                            ''
                                            }
                                        {comment.reply.content ? <p className={styles.sectionsinfos_boxcomments_reply_comment}>{comment.reply.content}</p> : ''}
                                        <p className={styles.sectionsinfos_boxcomments_comment}>{comment.content}</p>
                                        <h3>{comment.username} <span><img src={thumbupgrayicon} alt='thumbup icon'/> HACE {comment.date}</span></h3>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div>
                            <div>
                                <h3>XX</h3>
                            </div>
                            <div>
                                <p>No data available</p>
                                <h3>Error</h3>
                            </div>
                        </div>}
                    </div>
                    <button className={styles.button_dark} onClick={()=>moreComments()}>Ver Más</button>

                </article>
            </div>
        </section>
    )
}

export default SectionsInfos
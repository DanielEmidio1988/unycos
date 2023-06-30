import { useState, useEffect } from "react";
import axios from "axios";
import { URL_UNYCOS } from "../constants/ApiLinks";
import photouseranamilena from '../assets/utils/photouseranamilenagomez.svg'
import photouserdanielemidio from '../assets/utils/photodanielemidio.png'
import imagecurso1 from '../assets/img/ismaelcurso.svg'
import imagecurso2 from '../assets/img/lewiscurso.svg'
import imagecurso3 from '../assets/img/marcuscoopercurso.svg'

function GlobalState(){
    const [dataUser, setDataUser] = useState('')
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(true)
    const [typeModal, setTypeModal] = useState('')
    const dataLessonPlan = [{
        id: '01',
        title: 'Presentacion',
        content: 'Mireia, nuestra campeona, te da la bienvenida al curso que te llevará a la cima de la natación. Conocerás su técnica, su entrenamiento y muchas cosas más de la mano de un equipo de profesionales de fama internacional.'
    },{
        id: '02',
        title: 'Natación: aspectos generales',
        content: 'Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina.'
    },{
        id: '03',
        title: 'Bases biomecánicas de la natación',
        content: 'Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina.'
    },{
        id: '04',
        title: 'Estilos de Natacion',
        content: 'Una perfecta ejecución de estos estilos, unida al control y a la resistencia, te permitirá convertirte en un nadador interdisciplinar. Mireia y su equipo te enseñarán las claves y los secretos para dominarlos todos desde cero.'
    },{
        id: '05',
        title: 'Virajes y saltos',
        content: 'El manejo de los saltos y virajes mejorará considerablemente tu rendimiento y tu técnica de natación. Los profesionales de fama internacional que asisten a Mireia te enseñan a perfeccionar esta técnica.'
    }]
    const dataCommentsEstudiantes = [{
        photo: '',
        username: 'Samuel Vidal Hernández',
        date: '2 meses',
        content: 'Ha sido un curso muy gratificante,en el que he podido aprender muchas cosas gracias a los grandes ponentes que han colaborado y aportado sus conocimientos. Ahora toca ponerse manos a la obra y poner en practica todo lo aprendido. Estoy muy orgulloso',
        reply: {}
    },{
        photo: '',
        username: 'Francisco José Sacedo',
        date: '3 meses',
        content: 'Seguir creciendo como profesional es necesario pero si lo haces junto a tus ídolos se convierte en un placer. Gracias por esta experiencia y espero poder comentarlo en persona con sus protagonistas muy pronto',
        reply: {
            author: 'Equipo Unycos',
            title: 'Equipo Unycos',
            content: 'Este texto es una simulación de una contestación del equipo o del profesor directamente. El texto tendrá un aspecto diferenciado, y también tendrá un destaque mayor.',
            date: '3 meses'
        }
    },{
        photo: photouseranamilena,
        username: 'Ana Milena Gómez',
        date: '3 meses',
        content: 'Profundizar en el entrenamiento y proceso de enseñanza',
        reply: {
            author: 'Mireia Belmonte',
            title: '• Profesor',
            content: 'Hola, Ana! Continúa a practicar y seguro que mejorarás más y más tu desempeño! Un abrazo!',
            date: '3 meses'
        }
    },{
        photo: photouserdanielemidio,
        username: 'Daniel Emidio',
        date: '3 meses',
        content: 'didática legal',
        reply: {
            author: 'Cristiano Silva',
            title: '• Profesor',
            content: 'Hola, Daniel! Ficamos muito felizes com o feedback! Grande abraço!',
            date: '3 meses'
        }
    },{
        photo: '',
        username: 'Cassia Oliveira',
        date: '4 meses',
        content: 'Professores legais! Didática boa',
        reply: {
            author: 'Equipo Unycos',
            title: 'Equipo Unycos',
            content: 'Obrigado!',
            date: '4 meses'
        }
    },{
        photo: '',
        username: 'Edgar Santos',
        date: '4 meses',
        content: 'comentário 1',
        reply: {
            author: 'Lucas Souza',
            title: '• Profesor',
            content: 'Obrigado!',
            date: '4 meses'
        }
    }]
    const dataCourse = [
        {teacher: 'Marcus Cooper',
        course: 'Piragüismo',
        photo: imagecurso3,
        link: ''},
        {teacher: 'Ismael Cala',
        course: 'Desarrollo Personal',
        photo: imagecurso1,
        link: ''},
        {teacher: 'Lewis Amarante',
        course: 'Maquillaje',
        photo: imagecurso2,
        link: ''}
    ]
    const dataArticulos = [
        {title: 'Consejos para Nadadores Principiantes',
        date: '22.06.2019'},
        {title: 'Recomendaciones para lograr que un niño venza el miedo al agua',
        date: '22.06.2019'},
        {title: '¿Nadar es un buen método para adelgazar?',
        date: '22.06.2019'},
        {title: 'Consejos para mejorar la técnica del estilo crol',
        date: '22.06.2019'}
    ]
    const [dataApi, setDataApi] = useState('')

    useEffect(()=>{
        const browserDataApi = async ()=> {
            setLoading(true)
            try {
                const response = await axios.get(URL_UNYCOS, {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-mejor-key' : 'unycos'
                    }
                })
                setDataApi(response.data.spotlights)  
            } catch (error) {
                console.log(error)         
            }
             setLoading(false)
        }
        browserDataApi()
    },[])

    return{
        dataUser, 
        setDataUser,
        loading, 
        setLoading,
        showModal, 
        setShowModal,
        typeModal, 
        setTypeModal,
        dataLessonPlan,
        dataCommentsEstudiantes,
        dataCourse,
        dataArticulos,
        dataApi
    }
}

export default GlobalState
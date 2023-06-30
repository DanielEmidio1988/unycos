import styles from '../../styles/HomePage.module.css'
import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import principalimage from '../../assets/img/principalentrenarexito.png'
import img1 from '../../assets/img/entrenar1.png'
import img2 from '../../assets/img/entrenar2.png'
import img3 from '../../assets/img/entrenar3.png'

function SliderCentral(){
    const context = useContext(GlobalContext)
    const [principalInfo, setPrincipalInfo] = useState(context.dataApi[0])
    const [secondaryInfos, setSecondaryInfos] = useState('')

    // useEffect(()=>{
    //     const sliders = principalInfo.filter((info)=>{
    //         return context.dataApi !== info._id
    //     })
    // })

    return(
        <section className={styles.sliderentrenarexito}>
            
            <div className={styles.sliderentrenarboxinstructor}>
                <img src={principalInfo && principalInfo.image} alt='Image Instructor'/>
            </div>
            <div className={styles.sliderentrenarboxinfotraining}>
                <div className={styles.sliderentrenarfirstboxinfotraining}>
                    <h2>
                        {principalInfo && principalInfo.title}
                    </h2>
                    <p>
                        {principalInfo && principalInfo.description}
                    </p>
                </div>
                <div className={styles.sliderentrenarsecondboxinfotraining}>
                    {/* {secondaryInfos.length > 0 ?
                        secondaryInfos.map((info)=>{
                            return(
                                <div>
                                    <img src={info.image} alt='Image Instructor'/>
                                    <h3>{info.title}</h3>
                                </div>  
                            )
                        })
                    :
                    <div>
                        <h3>No data avaible</h3>
                    </div>  
                    } */}
                    {/* <div>
                        <img src={img1} alt='Image Instructor'/>
                        <h3>Estilos de natacion</h3>
                    </div>
                    <div>
                        <img src={img2} alt='Image Instructor'/>
                        <h3>Preparacion Fisica</h3>
                    </div>
                    <div>
                        <img src={img3} alt='Image Instructor'/>
                    </div> */}
                </div>              
            </div>
        </section>
    )
}

export default SliderCentral
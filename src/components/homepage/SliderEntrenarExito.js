import styles from '../../styles/HomePage.module.css'
import principalimage from '../../assets/img/principalentrenarexito.png'
import img1 from '../../assets/img/entrenar1.png'
import img2 from '../../assets/img/entrenar2.png'
import img3 from '../../assets/img/entrenar3.png'

function SliderEntrenarExito(){
    return(
        <section className={styles.sliderentrenarexito}>
            <div className={styles.sliderentrenarboxinstructor}>
                <img src={principalimage} alt='Image Instructor'/>
            </div>
            <div className={styles.sliderentrenarboxinfotraining}>
                <div className={styles.sliderentrenarfirstboxinfotraining}>
                    <h2>
                        Entrenar para el éxito
                    </h2>
                    <p>
                        Fusce sapien lectus, tincidunt scelerisque leo vitae, maximus venenatis felis. Suspendisse potenti. Aenean tincidunt mauris et euismod tincidunt. Aliquam erat volutpat. Cras eu feugiat diam. Suspendisse potenti. Nunc faucibus vulputate neque.
                    </p>
                </div>
                <div className={styles.sliderentrenarsecondboxinfotraining}>
                    <div>
                        <img src={img1} alt='Image Instructor'/>
                        <h3>Estilos de natacion</h3>
                    </div>
                    <div>
                        <img src={img2} alt='Image Instructor'/>
                        <h3>Preparacion Fisica</h3>
                    </div>
                    <div>
                        <img src={img3} alt='Image Instructor'/>
                    </div>
                </div>

                
            </div>


        </section>
    )
}

export default SliderEntrenarExito
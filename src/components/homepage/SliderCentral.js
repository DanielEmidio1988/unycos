import styles from '../../styles/HomePage.module.css'
import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

function SliderCentral(){
    const context = useContext(GlobalContext)
    const [dataCourses, setDataCourses] = useState([]) 
    const [dataMoreCourses, setDataMoreCourses] = useState([])
    const [selectedCourse, setSelectedCourse] = useState(null)
    console.log('selectedCourse')
    console.log(selectedCourse)

    useEffect(() => {
        if (context.dataApi) {
          setDataCourses(context.dataApi);
          setDataMoreCourses(context.dataApi.filter((data, index) => index > 0));
          setSelectedCourse(context.dataApi[0]);
        }
      }, [context.dataApi])

    function changeSelectedCourse(course){
        const updateDataMoreCourses = dataCourses.filter((data)=> data !== course)
        setSelectedCourse(course)
        setDataMoreCourses(updateDataMoreCourses)
        return
    }

    return(
        <section className={styles.sliderentrenarexito}>
          {context.loading ?
            <p>loading...</p>
            :
            dataCourses.length > 0 ?
            <>
                <div className={styles.sliderentrenarboxinstructor}>
                    <img src={selectedCourse?.image} alt='Image Instructor'/>
                </div>
                <div className={styles.sliderentrenarboxinfotraining}>
                    <div className={styles.sliderentrenarfirstboxinfotraining}>
                        <h2>
                            {selectedCourse?.title}
                        </h2>
                        <p>
                            {selectedCourse?.description}
                        </p>
                    </div>
                    <div className={styles.sliderentrenarsecondboxinfotraining}>
                        {dataMoreCourses.map((info)=>{
                                return(
                                    <div onClick={()=>changeSelectedCourse(info)}>
                                        <img src={info.image} alt='Image Instructor'/>
                                        <h3>{info.title}</h3>
                                    </div>  
                                )
                            })
                
                        }
                    </div>              
                </div>
            </>
            :
            <p>No data avaible</p>
            }  

        </section>
    )
}

export default SliderCentral
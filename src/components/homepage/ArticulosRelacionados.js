import styles from '../../styles/HomePage.module.css'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

function ArticulosRelacionados(){
    const context = useContext(GlobalContext)

    return(
        <section className={styles.articulos_relacionados}>

            <h1>Artículos Relacionados</h1>
            <div>
                {context.dataArticulos.length > 0 ?
                    context.dataArticulos.map((articulo,index)=>{
                        return(
                            <div key={index}>
                                <h3>{articulo.title}</h3>
                                <p>{articulo.date}</p>
                            </div>
                        )
                    })
                :
                    <div>
                        <h3>No data available</h3>
                        <p>xx.xx.xxxx</p>
                    </div>
                }
            </div>

            <button className={styles.button_dark}>Leer Más en Nuestro Blog</button>
        </section>
    )
}

export default ArticulosRelacionados
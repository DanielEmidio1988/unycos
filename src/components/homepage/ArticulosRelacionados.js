import styles from '../../styles/HomePage.module.css'

function ArticulosRelacionados(){
    return(
        <section className={styles.articulos_relacionados}>

            <h1>Artículos Relacionados</h1>
            <div>
                <div>
                    <h3>Consejos para Nadadores Principiantes</h3>
                    <p>22.06.2019</p>
                </div>
                <div>
                    <h3>Recomendaciones para lograr que un niño venza el miedo al agua</h3>
                    <p>22.06.2019</p>
                </div>
                <div>
                    <h3>¿Nadar es un buen método para adelgazar?</h3>
                    <p>22.06.2019</p>
                </div>
                <div>
                    <h3>Consejos para mejorar la técnica del estilo crol</h3>
                    <p>22.06.2019</p>
                </div>
            </div>

            <button>Leer Más en Nuestro Blog</button>
        </section>
    )
}

export default ArticulosRelacionados
import style from '../../../../styles/complements/sections/us/Us.module.scss'

const Us = () => {
    return (
        <section className={style.container} id="Us">
            <div className={style.info}>
                <h2>¿Qué nos hace tan geniales?</h2>
                <h4>Vivimos pensando en qué ofrecer y qué mejorar de nuestros servidores para atraer a más jugadores y ser los mejores.</h4>
            </div>

            <div className={style.card_container}>
                <div className={style.card}>
                    <i className="fas fa-headset fa-5x"></i>
                    <h4>Soporte 24/7</h4>
                    <span>Ofrecemos una atención al usuario a traves de discord, no dudes en preguntar!</span>
                </div>

                <div className={style.card}>
                    <i className="fas fa-users feature fa-5x"></i>
                    <h4>Comunidad</h4>
                    <span>Nuestra comunidad trata de implementar la mejor experiencia.</span>
                </div>

                <div className={style.card}>
                    <i className="fab fa-cloudscale feature fa-5x"></i>
                    <h4>Rendimiento</h4>
                    <span>Los servidores tiene un alto rendimiento, calidad ping y 0 errores.</span>
                </div>

                <div className={style.card}>
                    <i className="far fa-calendar-alt feature fa-5x"></i>
                    <h4>Eventos</h4>
                    <span>Organizamos varios eventos a lazar para más diversión en distintas modalidades.</span>
                </div>
            </div>

        </section>
    )
}

export default Us;

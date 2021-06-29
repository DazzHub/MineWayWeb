import style from '../../../../styles/complements/sections/modes/Modes.module.scss'

const Modes = () => {
    return (
        <section className={style.container} id="Modes">
            <div className={style.info}>
                <h2>¿Modalidaes populares?</h2>
                <h4>Estas son unas de las modalidades más populares en este momemento.</h4>
            </div>

            <div className={style.card_container}>
                <div className={style.card}>                   
                    <h3>Survival</h3>
                    <img src="../img/Survi.png" alt="survival"/>
                    <span>El modo de supervivencia es uno de los principales modos de juego en Minecraft. Los jugadores deben recopilar recursos, construir estructuras, combatir contra mobs, controlar el hambre y explorar el mundo en un esfuerzo por sobrevivir y prosperar</span>
                </div>

                <div className={style.card}>                   
                    <h3>SkyBlock</h3>
                    <img src="../img/skyblock.png" alt="skyblock"/>
                    <span>Skyblock es una modalidad de juego en Minecraft de tipo supervivencia pero con un mapa fuera de lo habitual. Como su nombre indica vivirás en el cielo en UNA ISLA FLOTANTE. Incluye desafios, pvp, tienda, subastas entre otras cosas geniales!</span>
                </div>

                <div className={style.card}>                   
                    <h3>SkyWars</h3>
                    <img src="../img/Skywars.png" alt="skywars"/>
                    <span>SkyWars se trata de una modalidad donde la combinación de la competitividad del PvP y la diversión está tan bien repartida que se trata de una modalidad PvP y, a la vez, casual para echarte risas con tus amigos en partidas frenéticas y no mas de 10 minutos de duración.</span>
                </div>

                <div className={style.card}>                   
                    <h3>ArenaPvp</h3>
                    <img src="../img/arenapvp.png" alt="arenapvp"/>
                    <span>En ArenaPvp podrás practicar con diferentes tipos de PvP que varían según tus gustos, compite contra los demás jugadores o con tus amigos. Demuestra de qué estás hecho!</span>
                </div>
            </div>

        </section>
    )
}

export default Modes;
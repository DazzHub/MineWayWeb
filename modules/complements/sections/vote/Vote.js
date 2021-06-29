import style from '../../../../styles/complements/sections/vote/Vote.module.scss'

const Vote = () => {
    return (
        <section className={style.container} id="Vote">
            <div className={style.info}>
                <h2>VOTA POR NUESTRO SERVIDOR</h2>
            </div>

            <div className={style.card_container}>
                <div className={style.card}>
                    <img src="../img/40serv.png"/>
                    <a href="https://www.40servidoresmc.es/mineway-votar">Votar</a>
                    <hr/>
                </div>

                <div className={style.card}>
                    <img src="../img/topg.png"/>
                    <a href="https://topg.org/Minecraft/in-451753">Votar</a>
                    <hr/>
                </div>

                <div className={style.card}>
                    <img src="../img/minecraft-mp.png"/>
                    <a href="https://minecraft-mp.com/server/172203/vote/">Votar</a>
                    <hr/>
                </div>                
            </div>

        </section>
    )
}

export default Vote;
import style from '../../../../styles/complements/sections/staff/Staff.module.scss'

const Staff = () => {
    return (
        <section className={style.container} id="Staff">
            <div className={style.info}>
                <h2>¿Staff?</h2>
                <h4>Estas admirables personas son las que se encargan de que todo funcione a la perfecion.</h4>
            </div>

            <div className={style.card_container}>
                <div className={style.card}>
                    <img src="../img/frank.png" alt="staff"/>
                    <h2>Fran_LR</h2>
                    <p>Owner</p>
                </div>

                <div className={style.card}>
                    <img src="../img/juan.png" alt="staff"/>
                    <h2>CruzJuan</h2>
                    <p>Owner - Configurador</p>
                </div>
            </div>
        </section>
    )
}

export default Staff;
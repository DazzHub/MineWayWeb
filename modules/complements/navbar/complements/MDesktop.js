import Image from 'next/image'

import style from '../../../../styles/complements/navbar/MDesktop.module.scss'

import logo from '../../../../public/img/logo.png'

const MDesktop = () => {
    return (
        <nav className={style.container}>

            <div className={style.ul_left}>
                <Image src={logo} alt="logo" />
                <span>MineWay</span>
            </div>

            <div className={style.ul_right}>
                <ul>
                    <li>
                        <a href="#Home">Inicio</a>
                    </li>

                    <li>
                        <a href="#Staff">Nosotros</a>
                    </li>

                    <li>
                        <a href="#Modes">Modalidades</a>
                    </li>

                    <li>
                        <a href="#Vote">Votar</a>
                    </li>

                    <li>
                        <a href="https://www.mineway.org/baneos/">Baneos</a>
                    </li>

                    <li>
                        <a href="https://tienda.mineway.org/">Tienda</a>
                    </li>                    
                </ul>
            </div>

        </nav>
    )
}

export default MDesktop;
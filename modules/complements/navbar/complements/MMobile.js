import Image from 'next/image'
import React from 'react';

import style from '../../../../styles/complements/navbar/MMobile.module.scss'

import logo from '../../../../public/img/logo.png'

const MMobile = () => {

    const [isOpenBars, setIsOpenBars] = React.useState(false);
    const [isOpenBarsBefore, setIsOpenBarsBefore] = React.useState(false);

    function menuOpen() {
        
        if(!isOpenBars){
            setIsOpenBars(true);
            setIsOpenBarsBefore(false);
        } else {
            setIsOpenBars(false);
            setIsOpenBarsBefore(true);
        }

    }

    function menuFlex() {
        if(isOpenBars){
            return (
                <div className={style.menuFlex}>
                    
                    <div className={style.action}>
                        <span onClick={() => menuOpen()}>X</span>
                    </div>             

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
            )
        } else {
            if(isOpenBarsBefore){
                
                setTimeout(() => {
                    setIsOpenBarsBefore(false);
                }, 200);

                return (                             
                    <div className={style.menuFlexClose} id="menuFlexClose"></div>      
                );
                
            }    
        }
    }

    return (
        <nav className={style.container}>

            <div className={style.ul_left}>
                <Image src={logo} alt="logo" />
                <span>MineWay</span>
            </div>

            <div className={style.ul_right}>                
                <div className={style.bars_container + " " + (!isOpenBars ? + "" : style.open)} onClick={() => menuOpen()}>
                    <div className={style.bars} />            
                </div>
            </div>

            {menuFlex()}
        </nav>
    )
}

export default MMobile;
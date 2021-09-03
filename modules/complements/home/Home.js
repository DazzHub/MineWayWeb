import Router from 'next/router';
import React from 'react'

import style from '../../../styles/complements/home/Home.module.scss'

const Home = ({data}) => {

	let dataso = data;

    function iHover(num) {
        let change = document.getElementById("ani_" + num);
        change.src = "../icons/icon-" + num + "-hover.png";
    }

    function iUnHover(num) {
        let change = document.getElementById("ani_" + num);
        change.src = "../icons/icon-" + num + ".png";
    }

    const copyUrl = () => {
        navigator.clipboard.writeText("play.mineway.org")
    }
	
	if (data == undefined || data == null) {
		const errordata = {
			"data": {
				"players": {
					"online": 0,
					"max": 200
				}
			}
		}
		
		dataso = errordata;
	}

    return (
        <section className={style.container} id="Home">
            <div className={style.section_hi}>
                <h1>Bienvenido</h1>   
                        
                <h3>MineWay Network</h3>
                <h4>Entre y únase a los <span>{dataso.players.online}/{dataso.players.max}</span> jugadores</h4>  
                                
                <button onClick={(event) => copyUrl(event)}>PLAY.MINEWAY.ORG</button>
            </div>		

            <div className={style.section_buttons}>
                <div className={style.b_ani} onMouseOver={() => iHover(2)} onMouseOut={() => iUnHover(2)} onClick={() => Router.push("https://minewaysv.buycraft.net/")} >
                    <img src="../icons/icon-2.png" id="ani_2"/>
                    <button>Tienda</button>
                </div>

                <div className={style.b_ani} onMouseOver={() => iHover(3)} onMouseOut={() => iUnHover(3)} onClick={() => Router.push("#Vote")} >
                    <img src="../icons/icon-3.png"  id="ani_3"/>
                    <button>Votar</button>
                </div>

                <div className={style.b_ani} onMouseOver={() => iHover(4)} onMouseOut={() => iUnHover(4)} onClick={() => Router.push("https://discord.com/invite/H8zFf9H")} >
                    <img src="../icons/icon-4.png" id="ani_4"/>
                    <button>Foro</button>
                </div>
            </div>
        </section>
    )
}

export default Home;
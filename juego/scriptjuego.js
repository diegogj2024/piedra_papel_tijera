let player=" "
botones=document.getElementsByClassName("botones");
botones[0].addEventListener("click",()=>{
    player="👊";
    let obj=new Juego(player," ")
    obj.generar_resultado()
    obj.verificar_resultado()
})

botones[1].addEventListener("click",()=>{
    player="🤚";
    let obj=new Juego(player," ")
    obj.generar_resultado()
    obj.verificar_resultado()
})

botones[2].addEventListener("click",()=>{
    player="✌️";
    let obj=new Juego(player," ")
    obj.generar_resultado()
    obj.verificar_resultado()
})


class Juego{
    constructor(jugador,maquina){
        this.jugador=jugador
        this.maquina=maquina
        this.opciones=["👊", "🤚", "✌️"]
    }

    generar_resultado(){
        this.maquina = this.opciones[Math.floor(Math.random() * this.opciones.length)];
    }

    verificar_resultado(){
        let resultado=document.getElementById("resultado")
        if(this.maquina==this.jugador){
            resultado.textContent="empate 😐​"
        }
        else if(this.maquina=="👊" && this.jugador=="🤚"){
            resultado.textContent="tu ganas ​🏆​​"
        }
        else if(this.maquina=="👊" && this.jugador=="✌️"){
            resultado.textContent="tu pierdes ​​​😭​​​"
        }
        else if(this.maquina=="✌️" && this.jugador=="🤚"){
            resultado.textContent="tu pierdes ​​​😭​​"
        }
        else if(this.maquina=="✌️" && this.jugador=="👊"){
            resultado.textContent="tu ganas ​🏆​​"
        }
        else if(this.maquina=="🤚" && this.jugador=="👊"){
            resultado.textContent="tu pierdes ​​​😭​​"
        }
        else if(this.maquina=="🤚" && this.jugador=="✌️"){
            resultado.textContent="tu ganas ​🏆​​"
        }
        let boton2=document.getElementsByClassName("botones1")
        boton2[0].textContent=this.maquina

    }
}


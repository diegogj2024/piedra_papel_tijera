let lista=[]
let botonlg=document.getElementsByClassName("flip-card__btn");
botonlg[0].addEventListener("click",()=>{
    let Input=document.getElementsByClassName("flip-card__input1");
    let texto=Input[0].value;
    let texto2=Input[1].value;
    let existe=false
    for (let i=0;i< lista.length;i++) {
        if (lista[i][1]===texto && lista[i][2]===texto2) {
            existe = true;
            break;
        }
    }
    if (existe) {
        window.location.href = "juego/juego.html";
    } else {
        alert("Este usuario no existe registrese primero");
    }
})

botonlg[1].addEventListener("click",()=>{
    let Input=document.getElementsByClassName("flip-card__input");
    let texto=Input[0].value;
    let texto2=Input[1].value;
    let texto3=Input[2].value

    if (texto === "" || texto2 === "" || texto3 === "") {
        alert("Por favor llena todos los campos");
        return;
    }
    else{
        lista.push([texto,texto2,texto3])
        alert(lista)
    }

})